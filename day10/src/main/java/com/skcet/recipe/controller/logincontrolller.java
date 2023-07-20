package com.skcet.recipe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skcet.recipe.Entity.loginentity;
import com.skcet.recipe.Service.loginservice;



@RestController
@CrossOrigin
public class logincontrolller {
	@Autowired
	loginservice ser;
	
	@PostMapping("/addDetails") 
	public loginentity addinfo(@RequestBody loginentity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/showDetails")
	public List<loginentity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/updateDetails")
		public loginentity updateInfo(@RequestBody loginentity	 st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/deleteDetails/{email}")
	 String deleteInfo(@PathVariable("email") String email){
		ser.deleteDetails(email);
		return "Deleted the data";
	}
//	
}