package com.skcet.recipe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.skcet.recipe.Entity.Entity;
import com.skcet.recipe.Repository.Repository;



@org.springframework.stereotype.Service
public class Service {
	@Autowired(required=true)
	Repository Re;
	public Entity saveDetails(Entity e)
	{
		return Re.save(e);
	}
	public List<Entity> getDetails(){
		return Re.findAll();
	} 
	public Entity updateDetails(Entity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String firstname) {
		Re.deleteById(firstname);
		
	}
}