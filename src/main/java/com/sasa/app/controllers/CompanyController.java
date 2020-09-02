package com.sasa.app.controllers;

import java.util.List;

import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Links;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sasa.app.entity.Company;


@CrossOrigin
@BasePathAwareController
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class CompanyController implements RepresentationModelProcessor<EntityModel<Company>>{

//	private static final Logger logger = LoggerFactory.getLogger(CompanyController.class);
//
//	@Autowired
//	private CompanyRepository companyRepository;
//	
//	@Autowired
//	private ProductRepository productRepository;

	@Override
	public EntityModel<Company> process(EntityModel<Company> model) {
		 Links links = model.getLinks();
		 List<Link> listLink = links.toList();
		 if (listLink==null || listLink.isEmpty()) {
			 
			 return model;
		 }
		 return model;
	}

}
