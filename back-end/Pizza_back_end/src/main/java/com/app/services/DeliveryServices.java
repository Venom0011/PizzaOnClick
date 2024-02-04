package com.app.services;

import java.util.List;

import com.app.dto.DeliveryRespDto;


public interface DeliveryServices {

	List<DeliveryRespDto> getAllDelivery();
	
	List<DeliveryRespDto> getDeliveryByUser(Integer id);
}
