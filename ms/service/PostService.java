package com.ms.service;

import java.util.List;

import com.ms.payload.PostDto;

public interface PostService {
	
	public PostDto createPost(PostDto postDto, Integer userId);
	
	public PostDto updatePost(PostDto postDto, Integer postId);
	
	public PostDto getPostById(Integer postId);
	
	public List<PostDto> getAllPosts();
	
	public List<PostDto> getPostsByUser(Integer userId);
	
	public List<PostDto> getActivePosts();
	
	public List<PostDto> getActiveUserPosts(Integer userId);
	
	public void deletePost(Integer postId);

}
