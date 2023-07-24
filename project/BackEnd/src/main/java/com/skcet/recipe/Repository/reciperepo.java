package com.skcet.recipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skcet.recipe.Entity.recipeentity;

public interface reciperepo extends JpaRepository<recipeentity,String>{

	
  
}