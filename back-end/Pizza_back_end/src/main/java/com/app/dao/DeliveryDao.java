package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Delivery;

public interface DeliveryDao extends JpaRepository<Delivery, Integer> {

	
	Delivery findByPaymentUser(Integer id); 
}
