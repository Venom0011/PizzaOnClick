package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DeliveryDao;
import com.app.dto.DeliveryRespDto;
import com.app.pojos.Delivery;

@Service
@Transactional
public class DeliveryServicesImpl implements DeliveryServices{

	@Autowired
	public DeliveryDao deldao;
	
	@Autowired
	public ModelMapper mapper;
	
	@Override
	public List<DeliveryRespDto> getAllDelivery() {
		return deldao.findAll().stream().map(e->mapper.map(e, DeliveryRespDto.class)).collect(Collectors.toList());
	}

	@Override
	public List<DeliveryRespDto> getDeliveryByUser(Integer id) {
		
		Delivery del=deldao.findByPaymentUser(id);
		return null;
	}

	
}
