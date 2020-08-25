package com.sasa.app.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Company;
import com.sasa.app.entity.projections.CompanyProjection;


@CrossOrigin
@RepositoryRestResource(excerptProjection = CompanyProjection.class, collectionResourceRel = "companies", path = "companies")
public interface CompanyRepository  extends PagingAndSortingRepository<Company, Integer>{

}
