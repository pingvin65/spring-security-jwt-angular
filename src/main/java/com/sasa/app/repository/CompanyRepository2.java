package com.sasa.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Company;
import com.sasa.app.entity.projections.CompanyProjection2;

@CrossOrigin
@RepositoryRestResource(excerptProjection = CompanyProjection2.class)
public interface CompanyRepository2 extends JpaRepository<Company, Integer> {


}
