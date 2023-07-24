package com.skcet.recipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.skcet.recipe.Entity.contactentity;
import com.skcet.recipe.Repository.contactrepo;



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