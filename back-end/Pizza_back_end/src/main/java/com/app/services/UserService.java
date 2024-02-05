package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.UserRespDto;


public interface UserService {

	UserRespDto addUser(UserRespDto user);
	
	List<UserRespDto> getAllUsers();
	
	ApiResponse deleteUser(Integer userId);
	
	UserRespDto updateUser(Integer userId,UserRespDto userdto);
}
