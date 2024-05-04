package com.ms.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {
	
private int postId;
	
	private String postName;
	private String createdAt;
	private boolean active = false;
	private UserDto user;

}
