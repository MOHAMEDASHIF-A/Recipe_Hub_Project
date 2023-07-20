package com.skcet.recipe.Entity;

import jakarta.persistence.Column;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name="Registration")
public class loginentity {
	@Id
	@Column(name="Email")
	private String email;
	@Column(name="Password")
	private String Password;
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
	public loginentity(String email, String password) {
		super();
		
		this.email = email;
		Password = password;
		
	}
    public loginentity() {
    	
    }
}