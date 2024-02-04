package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderRespDto {

	private LocalDate orderDate;

	private LocalDate deliveryDate;

	private double orderprice;

	private Status orderStatus;

}
