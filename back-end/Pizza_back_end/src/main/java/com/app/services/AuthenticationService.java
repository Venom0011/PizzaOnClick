package com.app.services;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exp.CustomExp;
import com.app.dao.UserDao;
import com.app.dto.AuthReqDto;
import com.app.dto.AuthResponse;
import com.app.dto.UserReqDto;
import com.app.dto.UserRespDto;
import com.app.pojos.User;

@Service
@Transactional
public class AuthenticationService {

	@Autowired
	private UserDao userdao;

	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtService jwtservice;
	
	@Autowired
	private AuthenticationManager authManager;
	
	
	@Autowired
	private ModelMapper mapper;

	public AuthResponse register(UserReqDto userdto) {

		User user = mapper.map(userdto, User.class);
		user.setPassword(passwordEncoder.encode(userdto.getPassword()));
		user = userdao.save(user);
		String token=jwtservice.generateToken(user);
		return new AuthResponse(token);
	}
	
	public AuthResponse authenticate(UserReqDto req) {
		authManager.authenticate(new 
				UsernamePasswordAuthenticationToken(
						req.getEmail(), req.getPassword()));
		User user=userdao.findByEmail(req.getEmail()).orElseThrow();
		String token=jwtservice.generateToken(user);
		
		return new AuthResponse(token);
	}
	
	public UserRespDto getUserByUserEmail(String  token) {
		String email =jwtservice.extractUsername(token);
		User user =userdao.findByEmail(email).orElseThrow(()->new CustomExp("user not exits"));
		System.out.println(user);
		return mapper.map(user, UserRespDto.class);
	}
}
