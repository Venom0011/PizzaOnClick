package com.app.services;
import java.time.LocalDate;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exp.CustomExp;
import com.app.dao.*;
import com.app.dto.*;
import com.app.pojos.*;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private UserDao userdao;
	
	@Autowired
	private OrderDao orderdao;
	
	@Autowired
	private PizzaDao pizzadao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse PlaceOrder(Integer userId,Integer pizzaId,OrderReqDto orderdto) {
		User user=userdao.findById(userId).orElseThrow(()->new CustomExp("User not exist"));
		Pizza pizza=pizzadao.findById(pizzaId).orElseThrow(()->new CustomExp("Pizza not found"));
		Order order=mapper.map(orderdto, Order.class);
		order.setUser(user);
		order.setPizza(pizza);
		order.setOrderStatus(Status.ORDER_RECEIVED);
		order.setOrderDate(LocalDate.now());
		orderdao.save(order);
		return new ApiResponse("Order Placed Successfully");
	}

	@Override
	public ApiResponse DeleteOrder(OrderRespDto orderDto) {
		// TODO Auto-generated method stub
		return null;
	}

}
