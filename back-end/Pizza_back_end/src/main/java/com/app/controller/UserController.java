package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthReqDto;
import com.app.dto.AuthResponse;
import com.app.dto.UserReqDto;
import com.app.dto.UserRespDto;
import com.app.services.AuthenticationService;
import com.app.services.UserService;


@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userservice;
	
	@Autowired
	private AuthenticationService  authservice;

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody UserReqDto userdto) {
		return ResponseEntity.ok(authservice.register(userdto));
	}
	
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody  UserReqDto userdto){
		AuthResponse response=authservice.authenticate(userdto);
		if(response!=null) return ResponseEntity.ok(response);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new AuthResponse("email or password incorrect"));
	}
	
	

	@GetMapping("/users")
	public ResponseEntity<?> getAllUser() {
		return ResponseEntity.ok(userservice.getAllUsers());
	}
	
	@PostMapping("/users/email")
	public ResponseEntity<?> getUserByUserName(@RequestHeader String Authorization){
//		System.out.println(authreq.getEmail());
		System.out.println(Authorization);
		String token=Authorization.substring(7,Authorization.length()).trim();
		return ResponseEntity.ok(authservice.getUserByUserEmail(token));
	}
	

	@DeleteMapping("users/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer userId) {
		try {
			return ResponseEntity.ok(userservice.deleteUser(userId));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}

	}

	@PutMapping("users/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Integer userId, @RequestBody UserRespDto dto) {
		try {
			return ResponseEntity.ok(userservice.updateUser(userId, dto));
		} catch (RuntimeException e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

}
