package com.sasa.app;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.sasa.app.service.UserService;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		if (username.compareTo("user") == 0) {
//			return new User("user", "password", new ArrayList<>());
//		}
//		return null;

		return userService.getUser(username);
	}

}
