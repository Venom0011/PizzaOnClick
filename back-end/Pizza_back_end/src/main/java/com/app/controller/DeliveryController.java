package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.services.DeliveryServices;

@RestController
@RequestMapping("/delivery")
public class DeliveryController {

	@Autowired
	DeliveryServices delservice;
	
	
	@GetMapping
	public ResponseEntity<?> getAllDelivery(){
		return ResponseEntity.ok(delservice.getAllDelivery());
	}
}
