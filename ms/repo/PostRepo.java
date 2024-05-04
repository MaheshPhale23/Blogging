package com.ms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.entity.Post;
import com.ms.entity.User;

public interface PostRepo extends JpaRepository<Post, Integer>{
	
	List<Post> findByUser(User user);
	
	List<Post> findByActive(Boolean b);
	
	List<Post> findByUserAndActive(User user, Boolean b);

}
