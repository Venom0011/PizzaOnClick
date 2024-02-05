package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exp.CustomExp;
import com.app.dao.AddressDao;
import com.app.dao.UserDao;
import com.app.dto.AddressReqDto;
import com.app.dto.AddressRespDto;
import com.app.dto.ApiResponse;
import com.app.pojos.Address;
import com.app.pojos.User;

@Service
@Transactional
public class AddressServicesImpl implements AddressServices {

	@Autowired
	private AddressDao addressdao;
	
	@Autowired
	private UserDao userdao;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public List<AddressRespDto> getAllAdress() {
		// TODO Auto-generated method stub
		return addressdao.findAll().stream().map(e->mapper.map(e, AddressRespDto.class)).collect(Collectors.toList());
	}

	@Override
	public AddressRespDto getAddressByUser(Integer userid) {
		User user= userdao.findById(userid).orElseThrow(()->new CustomExp("User not exists"));
		Address add=addressdao.findByUser(user);
		if(add==null) throw new CustomExp("Address not found");
		return mapper.map(add, AddressRespDto.class);
	}

	@Override
	public AddressReqDto addAddress(AddressReqDto dto) {
		Address add=mapper.map(dto, Address.class);
		addressdao.save(add);
		return mapper.map(add, AddressReqDto.class);
	}

	@Override
	public AddressReqDto updateAddress(AddressReqDto dto) {
		Address add=mapper.map(dto, Address.class);
		addressdao.save(add);
		return mapper.map(add, AddressReqDto.class);
	}

	
	@Override
	public ApiResponse deleteAddress(Integer addressid) {
		Address add=addressdao.findById(addressid).orElseThrow(()->new CustomExp("Address not exists"));
		addressdao.delete(add);
		return new ApiResponse("Address details with Id" + add.getId() + "deleted successfully");
	}

	
}
