package com.skcet.recipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.skcet.recipe.Entity.loginentity;
import com.skcet.recipe.Repository.loginrepo;



@org.springframework.stereotype.Service
public class loginservice {
	@Autowired(required=true)
	loginrepo Re;
	public loginentity saveDetails(loginentity e)
	{
		return Re.save(e);
	}
	public List<loginentity> getDetails(){
		return Re.findAll();
	} 
	public loginentity updateDetails(loginentity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String email) {
		Re.deleteById(email);
		
	}
}