package com.sasa.app.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.ItemTypeEntity;


@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "item_types", path = "item_types")
public interface ItemTypeRepository extends PagingAndSortingRepository<ItemTypeEntity, Integer>{

}
