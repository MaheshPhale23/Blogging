package com.ms.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ms.entity.Role;
import com.ms.entity.User;
import com.ms.entity.UserRoles;
import com.ms.payload.UserDto;
import com.ms.repo.RoleRepo;
import com.ms.repo.UserRepo;
import com.ms.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	RoleRepo roleRepo;

	@Override
	public UserDto createUser(UserDto userDto) throws Exception {
		
		User user = this.dtoToUser(userDto);
		
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		Role role = this.roleRepo.findById(44).get();
		
		UserRoles userRoles2 = new UserRoles();
		userRoles2.setRole(role);
		userRoles2.setUser(user);
		
		user.getUserRoles().add(userRoles2);
		
		User savedUser = this.userRepo.save(user);
		return this.userToDto(savedUser);
		
	}


	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow();
		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setUsername(userDto.getUsername());
		user.setPassword(userDto.getPassword());
		
		User updatedUser=this.userRepo.save(user);
		UserDto userDto1 = this.userToDto(updatedUser);
		return userDto1;
	}


	@Override
	public UserDto getByUserId(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow();
		return this.userToDto(user);
	}


	@Override
	public UserDto getByUsername(String username) {
		User user = this.userRepo.findByUsername(username);
		return this.userToDto(user);
	}


	@Override
	public List<UserDto> getAllUsers() {
		List<User> users = this.userRepo.findAll();
		List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());
		return userDtos;
	}


	@Override
	public void deleteUser(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow();
		this.userRepo.delete(user);
		
	}
	
	
	
	public User dtoToUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto, User.class);
		return user;
	}
	
	public UserDto userToDto(User user) {
		UserDto userDto = this.modelMapper.map(user, UserDto.class);
		return userDto;
		
	}

}
