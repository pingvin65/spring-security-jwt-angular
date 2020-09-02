package com.sasa.app.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sasa.app.AppUserDetailsService;
import com.sasa.app.models.AuthenticationRequest;
import com.sasa.app.models.AuthenticationResponse;
import com.sasa.app.utlies.JwtUtil;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class AppController {

	private static final Logger logger = LoggerFactory.getLogger(AppController.class);

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private AppUserDetailsService userDetailsService;

	private BCryptPasswordEncoder encoder;

	@GetMapping
	public String home() {
		logger.info("----> home");
		return "home";
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {

		try {
			String password = "";
			encoder = new BCryptPasswordEncoder();
			String ecodedPassword = encoder.encode(authenticationRequest.getPassword());
			logger.debug("---> {} -- {}", authenticationRequest.getPassword(), ecodedPassword);
			if (encoder.matches(authenticationRequest.getPassword(),
					userDetailsService.loadUserByUsername(authenticationRequest.getUsername()).getPassword())) {
				password = userDetailsService.loadUserByUsername(authenticationRequest.getUsername()).getPassword();
			}
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), password));
		} catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}

}
