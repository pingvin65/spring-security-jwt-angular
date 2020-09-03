package com.sasa.app.entity.projections;

import org.springframework.data.rest.core.config.Projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sasa.app.entity.Company;
import com.sasa.app.entity.Product;

@Projection(name = "products", types = { Product.class })
public interface ProductProjection {

	@JsonProperty("phone_name")
	String getName();
	
	@JsonProperty("description")
	String getDescription();
	
	interface Company{
		@JsonProperty("company_name")
		String getName();
	}
	
	@JsonProperty("company")
	Company getCompany();
	
}
