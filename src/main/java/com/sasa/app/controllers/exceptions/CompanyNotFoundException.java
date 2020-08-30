package com.sasa.app.controllers.exceptions;

public class CompanyNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6837495542369955269L;
	
	public CompanyNotFoundException(Integer id){
		super("Could not find brend " + id);
	}

}
