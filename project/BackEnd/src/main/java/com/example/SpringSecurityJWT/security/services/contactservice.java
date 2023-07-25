package com.example.SpringSecurityJWT.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.SpringSecurityJWT.models.contactentity;
import com.example.SpringSecurityJWT.repository.contactrepo;








@org.springframework.stereotype.Service
public class contactservice {
	@Autowired(required=true)
	contactrepo Re;
	public contactentity saveDetails(contactentity e)
	{
		return Re.save(e);
	}
	public List<contactentity> getDetails(){
		return Re.findAll();
	} 
	public contactentity updateDetails(contactentity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String firstname) {
		Re.deleteById(firstname);
		
	}
}