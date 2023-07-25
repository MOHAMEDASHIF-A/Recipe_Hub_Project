package com.example.SpringSecurityJWT.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringSecurityJWT.models.contactentity;
import com.example.SpringSecurityJWT.security.services.contactservice;





@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class contactcontroller {
	@Autowired
	contactservice ser;
	
	@PostMapping("/addfeed") 
	public contactentity addinfo(@RequestBody contactentity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/showfeed")
	public List<contactentity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/updatefeed")
		public contactentity updateInfo(@RequestBody contactentity	 st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/deletefeed/{name}")
	 String deleteInfo(@PathVariable("name") String name){
		ser.deleteDetails(name);
		return "Deleted the data";
	}
//	
}