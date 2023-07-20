package com.skcet.recipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skcet.recipe.Entity.Entity;

public interface Repository extends JpaRepository<Entity,String>{

	
  
}