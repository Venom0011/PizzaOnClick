package com.app.services;

import java.util.List;

import com.app.dto.PizzaReqDto;
import com.app.dto.PizzaRespDto;

public interface PizzaService 
{
	
	 PizzaReqDto addNewPizzaWithImage(PizzaReqDto dto);
	
	 String deletePizza(Integer pizzaId);
	
	 String updatePizza(Integer pizzaId, PizzaReqDto pizzaDto);
	
	 List<PizzaRespDto> getAllPizza();
	
	 PizzaRespDto getPizzaById(Integer id);
	
	//public String addPizzaWithImage(PizzaReqDto pizzaDto, MultipartFile image);
}
