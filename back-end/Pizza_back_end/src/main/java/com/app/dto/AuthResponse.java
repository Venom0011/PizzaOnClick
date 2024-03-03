package com.app.dto;

public class AuthResponse {

	private String token;
	
	public AuthResponse(String token) {
		// TODO Auto-generated constructor stub
		this.token=token;
	}
	
	public String getToken() {
		return token;
	}
}
