package com.app.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.app.pojos.User;
import com.app.services.JwtService;
import com.app.services.UserServiceImpl;

@Component
public class JwtAuthFilter extends OncePerRequestFilter{

	@Autowired
	private JwtService jwtservice;
	
	@Autowired
	private UserServiceImpl userservice;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
	
		String authHeader=request.getHeader("Authorization");
		if(authHeader==null || !authHeader.startsWith("Bearer ")) {
			filterChain.doFilter(request, response);
			return;
		}
		String token=authHeader.substring(7);
		String username=jwtservice.extractUsername(token);
		
		if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
			UserDetails userdetails=userservice.loadUserByUsername(username);
			
			if(jwtservice.isValid(token, userdetails)){
				UsernamePasswordAuthenticationToken authToken=new 
						UsernamePasswordAuthenticationToken(userdetails,null, userdetails.getAuthorities());
		
				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authToken);
			}
			
		}
	
		filterChain.doFilter(request, response);
	}
	
	
}
