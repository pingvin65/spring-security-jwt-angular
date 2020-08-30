package com.sasa.app;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.hateoas.mediatype.hal.Jackson2HalModule;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebMvc
public class MvcConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		registry.addResourceHandler("/resources/public/**").addResourceLocations("/resources/public");
		registry.addResourceHandler("/**").addResourceLocations("classpath:/templates/");
		registry.addResourceHandler("/**").addResourceLocations("classpath:/public/");

	}

//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
////        registry.addMapping("/**")
////                .allowedMethods("*");
//
////        registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*").allowedMethods("*");
////		registry.addMapping("/**");
//	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/v1/**").allowedOrigins("*").allowedMethods("*").allowedHeaders("*")
				.allowCredentials(false).maxAge(3600);
	}
	
//	@Bean
//	public RestTemplate restTemplate() {
//	    final ObjectMapper mapper = new ObjectMapper();
//	    mapper.registerModule(new Jackson2HalModule());
//
//	    final MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
//	    converter.setSupportedMediaTypes(MediaType.parseMediaTypes("application/hal+json"));
//	    converter.setObjectMapper(mapper);
//
//	    return new RestTemplate(Collections.<HttpMessageConverter<?>> singletonList(converter));
//	}
}
