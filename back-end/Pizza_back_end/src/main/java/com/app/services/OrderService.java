package com.app.services;

import com.app.dto.ApiResponse;
import com.app.dto.OrderReqDto;
import com.app.dto.OrderRespDto;

public interface OrderService {

	ApiResponse PlaceOrder(Integer userId,Integer pizzaId,OrderReqDto orderdto);
	
	ApiResponse DeleteOrder(OrderRespDto orderDto);
	
}
