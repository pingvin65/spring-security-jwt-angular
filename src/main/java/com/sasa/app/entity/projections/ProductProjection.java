package com.sasa.app.entity.projections;

import org.springframework.data.rest.core.config.Projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sasa.app.entity.Product;

@Projection(name = "productEntity", types = { Product.class })
public interface ProductProjection {

	@JsonProperty("product_name")
	String getName();
	
//	interface CompanyEntity{
//		@JsonProperty("company_name")
//		String getName();
//	}
	
//	@JsonProperty("company")
//	CompanyEntity getCompany();
	
}
