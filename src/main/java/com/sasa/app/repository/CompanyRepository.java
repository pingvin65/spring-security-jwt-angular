package com.sasa.app.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Company;
import com.sasa.app.entity.projections.CompanyProjection;
import com.sasa.app.entity.projections.CompanyProjectionView;

@CrossOrigin
@RepositoryRestResource(excerptProjection = CompanyProjection.class, collectionResourceRel = "companies", path = "companies")
public interface CompanyRepository extends PagingAndSortingRepository<Company, Integer> {

}
