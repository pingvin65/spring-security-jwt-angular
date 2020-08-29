package com.sasa.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sasa.app.repository.CompanyRepository;

@CrossOrigin
@BasePathAwareController
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class CompanyController {

	private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);

	@Autowired
	private CompanyRepository companyRepository;

//	@RequestMapping(value = "companies/{id}", method = RequestMethod.GET)
//	public HttpEntity<?> getCompanyById(@PathVariable(value = "id") Integer id) {
//
//		try {
////			logger.debug("---> idKey {}", id);
//			if (companyRepository.existsById(id)) {
//				return ResponseEntity.ok(companyRepository.findByNameQueryNamedParam(id));
//			}else {
//				return ResponseEntity.notFound().build();
//			}
//		} catch (ResourceNotFoundException ex) {
//
//			logger.error(ex.getMessage());
//			return ResponseEntity.notFound().build();
//
//		}
//
//	}

}
