package com.sasa.app.entity.projections;

import org.springframework.data.rest.core.config.Projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sasa.app.entity.Company;

@Projection(name = "company2products", types = { Company.class })
public interface CompanyProjection {

	@JsonProperty("company_name")
	String getName();
	
	interface Product{
		@JsonProperty("product_name")
		String getName();
	}
	
//	@JsonProperty("company")
//	CompanyEntity getCompany();
}
