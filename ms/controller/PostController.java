package com.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ms.payload.PostDto;
import com.ms.service.PostService;

@RestController
@RequestMapping("/posts")
@CrossOrigin("*")
public class PostController {
	
	@Autowired
	PostService postService;
	
	// create post
	@PostMapping("/user/{userId}/creatPost")
	public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto, @PathVariable Integer userId){
		PostDto createPost = this.postService.createPost(postDto, userId);
		return new ResponseEntity<PostDto>(createPost,HttpStatus.CREATED);
	}
	
	// update posts
	@PutMapping("/updatePost/{postId}")
	public ResponseEntity<PostDto> updatePost(@RequestBody PostDto postDto ,@PathVariable Integer postId){
		PostDto updatePost = this.postService.updatePost(postDto,postId);
		return new ResponseEntity<PostDto>(updatePost,HttpStatus.OK);
	}
	
	// get post by user
	@GetMapping("/user/{userId}/posts")
	public ResponseEntity<List<PostDto>> getPostByUser(@PathVariable Integer userId){
		List<PostDto> posts = this.postService.getPostsByUser(userId);
		return new ResponseEntity<List<PostDto>>(posts,HttpStatus.OK);
	}
	
	// get all posts
	@GetMapping("/posts")
	public ResponseEntity<List<PostDto>> getAllPost(){
		return ResponseEntity.ok(this.postService.getAllPosts());
	}
	
	// get posts by Id
	@GetMapping("/post/{postId}")
	public ResponseEntity<PostDto> getPostById(@PathVariable Integer postId){
		return ResponseEntity.ok(this.postService.getPostById(postId)); 
	}
	
	@GetMapping("/active")
	public ResponseEntity<List<PostDto>> getActivePosts(){
		return ResponseEntity.ok(this.postService.getActivePosts());
	}
	
	@GetMapping("/user/{userId}/active")
	public ResponseEntity<List<PostDto>> getActiveUserPosts(@PathVariable Integer userId){
		return ResponseEntity.ok(this.postService.getActiveUserPosts(userId));
	}
	
	@DeleteMapping("{postId}")
	public void deletePost(@PathVariable Integer postId) {
		this.postService.deletePost(postId);
	}
	
}
