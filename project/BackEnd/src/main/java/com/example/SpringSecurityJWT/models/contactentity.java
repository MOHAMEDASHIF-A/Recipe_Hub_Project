package com.example.SpringSecurityJWT.models;

import jakarta.persistence.Column;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name="Contact")
public class contactentity {
	@Id
	@Column(name="Name") 
	private String name;
	@Column(name="Email")
	private String email;
	@Column(name="Message")
	private String message;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public contactentity(String name, String email, String message) {
		super();
		this.name = name;
		this.email = email;
		this.message = message;
	}
	public contactentity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}