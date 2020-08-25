package com.sasa.app.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "company")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique = true)
	private String name;

	
//	@JsonProperty("company")	
	@OneToMany(mappedBy = "company", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<Product> products;

	
	public Company() {
		super();
	}

//	@
	public Company(String name) {
		super();
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


//	public Set<ProductEntity> getProducts() {
//		return products;
//	}
//
//	public void setProducts(Set<ProductEntity> products) {
//		this.products = products;
//	}

}
