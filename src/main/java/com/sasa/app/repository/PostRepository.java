package com.sasa.app.repository;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Post;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "post", path = "post")
public interface PostRepository extends PagingAndSortingRepository<Post, Integer> {
	
	@RestResource(path = "title", rel = "title")
	Optional<Post> findByTitle(String title);

}
