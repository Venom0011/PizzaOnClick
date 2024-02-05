package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddressReqDto;
import com.app.dto.AddressRespDto;
import com.app.services.AddressServices;

@RestController
@RequestMapping("/address")
public class AddressController {
	
	@Autowired
	private AddressServices addserice;
	
	@GetMapping
	public ResponseEntity<?> getAllAdress(){
		List<AddressRespDto> lst=addserice.getAllAdress();
		if(lst==null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No adddess register yet..");
		return ResponseEntity.ok(lst);
	}
	
	@GetMapping("/{userid}")
	public ResponseEntity<?> getAdressByUser(@PathVariable Integer userid){
		AddressRespDto add=addserice.getAddressByUser(userid);
		if(add==null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No adddess found..");
		return ResponseEntity.ok(add);
	}
	
	@PutMapping
	public ResponseEntity<?> UpdateAddress(@RequestBody AddressReqDto dto){
		AddressReqDto add=addserice.addAddress(dto);;
		if(add==null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No adddess found..");
		return ResponseEntity.ok(add);
	}

}
