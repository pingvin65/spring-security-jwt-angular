package com.sasa.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.server.core.EvoInflectorLinkRelationProvider;

@SpringBootApplication
public class SpringSecurityJwtAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityJwtAngularApplication.class, args);
	}
	
	/**
	 * Format embedded collections by pluralizing the resource's type.
	 * 
	 * @return
	 */
	@Bean
	EvoInflectorLinkRelationProvider relProvider() {
		return new EvoInflectorLinkRelationProvider();
	}

}
