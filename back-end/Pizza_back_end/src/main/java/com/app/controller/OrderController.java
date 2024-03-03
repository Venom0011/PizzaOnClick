package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderReqDto;
import com.app.services.OrderService;

@RestController
@RequestMapping("/pizza")
public class OrderController {

	@Autowired
	private OrderService orderservice;
	
	@PostMapping("/{userId}/{pizzaId}")
	public ResponseEntity<?> placeOrder(@PathVariable Integer userId,@PathVariable Integer pizzaId, @RequestBody OrderReqDto dto) {
		return ResponseEntity.ok(orderservice.PlaceOrder(userId, pizzaId, dto));
	}
}
