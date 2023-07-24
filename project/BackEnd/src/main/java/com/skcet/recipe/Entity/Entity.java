package com.skcet.recipe.Entity;

import jakarta.persistence.Column;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name="Registration")
public class Entity {
	@Id
	@Column(name="FirstName") 
	private String firstname;
	@Column(name="LastName") 
	private String lastname;
	@Column(name="Email")
	private String email;
	@Column(name="Password")
	private String Password;
	@Column(name="ConfirmPassword")
	private String confirmPassword;
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
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
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConformPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	public Entity(String firstname,String lastname, String email, String password, String confirmPassword) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		Password = password;
		this.confirmPassword = confirmPassword;
	}
    public Entity() {
    	
    }
}