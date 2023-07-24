package com.skcet.recipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.skcet.recipe.Entity.recipeentity;
import com.skcet.recipe.Repository.reciperepo;



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