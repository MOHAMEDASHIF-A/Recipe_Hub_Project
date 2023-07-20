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

import com.skcet.recipe.Entity.Entity;
import com.skcet.recipe.Service.Service;



@RestController
@CrossOrigin
public class Controller {
	@Autowired
	Service ser;
	
	@PostMapping("/addDetails") 
	public Entity addinfo(@RequestBody Entity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/showDetails")
	public List<Entity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/updateDetails")
		public Entity updateInfo(@RequestBody Entity	 st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/deleteDetails/{firstname}")
	 String deleteInfo(@PathVariable("firstname") String firstname){
		ser.deleteDetails(firstname);
		return "Deleted the data";
	}
//	
}