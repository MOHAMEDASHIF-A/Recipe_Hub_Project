package com.skcet.recipe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skcet.recipe.Entity.loginentity;

public interface loginrepo extends JpaRepository<loginentity,String>{

	
  
}