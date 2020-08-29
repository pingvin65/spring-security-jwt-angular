package com.sasa.app.entity;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "Employee")
public class EmployeeEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7054748903802582163L;

//	CREATE TABLE  "AGENTS" 
//	   (	
//	    "AGENT_CODE" CHAR(6) NOT NULL PRIMARY KEY, 
//		"AGENT_NAME" CHAR(40), 
//		"WORKING_AREA" CHAR(35), 
//		"COMMISSION" NUMBER(10,2), 
//		"PHONE_NO" CHAR(15), 
//		"COUNTRY" VARCHAR2(25) 
//		 );
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;
	
    @Id
    @Column(name = "id", columnDefinition = "CHAR(5)")
    @Type(type="uuid-char")
    private UUID id;

	@Column(name = "FIRST_NAME", unique = false, nullable = false, length = 100)
	private String firstName;
	@Column(name = "LAST_NAME", unique = false, nullable = false, length = 100)
	private String lastName;

	// Natural id can be SSN as well
//	@NaturalId
//	Integer SSN;

	// Setters and Getters

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	

}
