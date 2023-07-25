package com.example.SpringSecurityJWT.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.SpringSecurityJWT.models.recipeentity;
import com.example.SpringSecurityJWT.repository.reciperepo;




@org.springframework.stereotype.Service
public class recipeservice {
	@Autowired(required=true)
	reciperepo Re;
	public recipeentity saveDetails(recipeentity e)
	{
		return Re.save(e);
	}
	public List<recipeentity> getDetails(){
		return Re.findAll();
	} 
	public recipeentity updateDetails(recipeentity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String recipename) {
		Re.deleteById(recipename);
		
	}
}