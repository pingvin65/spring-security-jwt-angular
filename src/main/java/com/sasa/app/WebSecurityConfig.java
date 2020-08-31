package com.sasa.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.sasa.app.filters.JwtRequestFilter;
import com.sasa.app.utlies.JwtAuthenticationEntryPoint;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	@Autowired
	private AppUserDetailsService appUserDetailsService;
	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(appUserDetailsService);
	}

//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return NoOpPasswordEncoder.getInstance();
//	}
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new PasswordEncoder() {
			@Override
			public String encode(CharSequence rawPassword) {
				return rawPassword.toString();
			}

			@Override
			public boolean matches(CharSequence rawPassword, String encodedPassword) {
				return rawPassword.toString().equals(encodedPassword);
			}
		};
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
//        return source;
//    }

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {

		// We don't need CSRF for this example
		httpSecurity.cors().and().csrf().disable()
				/* real settings */
//				.authorizeRequests().antMatchers("/", "/*.*", "/item-type", "/login", "/about", "/home",
//						"/companies/**", "/products/**", "/assets/**", "/api/v1/authenticate", "/register")
				/* for testing */
				.authorizeRequests().antMatchers("/**",/*"/", "/*.*", "/item-type", "/login", "/about", "/home", */ "/companies/**", "/products/**" ,"/assets/**",
						"/api/v1/authenticate", "/register")
				.permitAll().
				// all other requests need to be authenticated
				anyRequest().authenticated().and().

				// make sure we use stateless session; session won't be used to
				// store user's state.
				exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		// Add a filter to validate the tokens with every request
		httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}
}
