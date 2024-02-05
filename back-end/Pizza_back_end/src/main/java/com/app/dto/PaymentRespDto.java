package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Status;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PaymentRespDto {

	private double amount;
	
	private LocalDate paymentDate;
	
	private String paymentDesc;
	
	private Status paymentStatus;
	
	private UserRespDto user;

	private OrderRespDto order;
}
