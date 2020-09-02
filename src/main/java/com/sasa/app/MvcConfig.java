package com.sasa.app;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class MvcConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		registry.addResourceHandler("/resources/public/**").addResourceLocations("/resources/public");
		registry.addResourceHandler("/**").addResourceLocations("classpath:/templates/");
		registry.addResourceHandler("/**").addResourceLocations("classpath:/public/");

	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/v1/**").allowedOrigins("*").allowedMethods("*").allowedHeaders("*")
				.allowCredentials(false).maxAge(3600);
	}
	
}
