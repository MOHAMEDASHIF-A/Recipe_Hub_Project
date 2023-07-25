package com.example.SpringSecurityJWT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringSecurityJWT.models.recipeentity;


public interface reciperepo extends JpaRepository<recipeentity,String>{

	
  
}