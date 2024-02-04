package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.UserRespDTO;


public interface UserService {

	UserRespDTO addUser(UserRespDTO user);
	
	List<UserRespDTO> getAllUsers();
	
	ApiResponse deleteUser(Integer userId);
	
	UserRespDTO updateUser(Integer userId,UserRespDTO userdto);
}
