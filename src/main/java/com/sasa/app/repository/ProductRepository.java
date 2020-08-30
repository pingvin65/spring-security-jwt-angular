package com.sasa.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Product;
import com.sasa.app.entity.projections.ProductProjection;

@CrossOrigin
@RepositoryRestResource(excerptProjection = ProductProjection.class, collectionResourceRel = "products", path = "products")
public interface ProductRepository extends PagingAndSortingRepository<Product, Integer> {

	@RestResource(path = "company_name", rel = "company_name")
	Page<Product> findByCompanyName(String name, Pageable parameter);

	@RestResource(path = "company_id", rel = "company_id")
	Page<Product> findByCompanyId(Integer id, Pageable parameter);

}
