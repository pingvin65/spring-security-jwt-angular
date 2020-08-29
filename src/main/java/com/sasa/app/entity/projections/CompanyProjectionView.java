package com.sasa.app.entity.projections;

import org.springframework.data.rest.core.config.Projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sasa.app.entity.Company;

@Projection(name = "company_view", types = { Company.class })
public interface CompanyProjectionView {

	@JsonProperty("company_name")
	String getName();
	
	@JsonProperty("description")
	String getDescription();
//	interface Product{
//		@JsonProperty("product_name")
//		String getName();
//	}
	
//	@JsonProperty("company")
//	CompanyEntity getCompany();
}
