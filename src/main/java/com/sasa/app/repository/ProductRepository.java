package com.sasa.app.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Product;
import com.sasa.app.entity.projections.ProductProjection;


@CrossOrigin
@RepositoryRestResource(excerptProjection = ProductProjection.class, collectionResourceRel = "products", path = "products")
public interface ProductRepository  extends PagingAndSortingRepository<Product, Integer>{

}
