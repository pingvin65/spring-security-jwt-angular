package com.sasa.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Links;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.core.io.Resource;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sasa.app.repository.CompanyRepository;
import com.sasa.app.repository.ProductRepository;



import com.sasa.app.entity.Company;
import com.sasa.app.entity.Product;


@CrossOrigin
@BasePathAwareController
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class CompanyController implements RepresentationModelProcessor<EntityModel<Company>>{

	private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);

	@Autowired
	private CompanyRepository companyRepository;
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public EntityModel<Company> process(EntityModel<Company> model) {
		// TODO Auto-generated method stub
		 Links links = model.getLinks();
		 List<Link> listLink = links.toList();
		 if (listLink==null || listLink.isEmpty()) {
			 
			 return model;
		 }
		 return model;
	}

	@RequestMapping(value = "companies/{id}", method = RequestMethod.GET)
	public HttpEntity<?> getCompanyById(@PathVariable(value = "id") Integer id) {

		try {
//			logger.debug("---> idKey {}", id);
			if (companyRepository.existsById(id)) {
				return ResponseEntity.ok(companyRepository.findByNameQueryNamedParam(id));
			}else {
				return ResponseEntity.notFound().build();
			}
		} catch (ResourceNotFoundException ex) {

			logger.error(ex.getMessage());
			return ResponseEntity.notFound().build();
		}

	}

	
//	@RequestMapping(value = "companies/{id}/products", method = RequestMethod.GET, produces="application/hal+json")
//	public HttpEntity<?> getCompanyByIdAndProducts(@PathVariable(value = "id") Integer id, Pageable pageable) {
//		
////		companyRepository.findById(id);
////		Page<Product> page = productRepository.findByCompanyId(id, pageable);
////		Resources<String> resources = new Resources<String>(page); 
//		PageRequest page = PageRequest.of(
//	            0, 4, Sort.by("id").descending());
//		return ResponseEntity.ok(productRepository.findByCompanyId(id, page));
//		
//	}
}
