package com.ms.service;

import java.util.List;
import com.ms.payload.UserDto;

public interface UserService {
	
	//creating user
	public UserDto createUser(UserDto userDto) throws Exception;
	
	public UserDto updateUser(UserDto userDto, Integer userId);
	
	public UserDto getByUserId(Integer userId);
	
	public UserDto getByUsername(String username);
	
	public List<UserDto> getAllUsers();
	
	public void deleteUser(Integer userId);

}
