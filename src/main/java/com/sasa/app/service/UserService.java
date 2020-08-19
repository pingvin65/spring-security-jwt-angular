package com.sasa.app.service;

import java.util.ArrayList;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;

import com.sasa.app.entity.UserEntity;
import com.sasa.app.repository.UserRepository;

@Service
public class UserService {

	private static final Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	private UserRepository userRepository;

	private BCryptPasswordEncoder encoder;

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public boolean checkUser(String userName, String password) {
		boolean userAndPaaswird = false;
		this.encoder = new BCryptPasswordEncoder();

		Optional<UserEntity> user = userRepository.findByUserName(userName);
		if (user.isPresent()) {
			if (this.encoder.matches(password, user.get().getPassword())) {
				userAndPaaswird = true;
				logger.info("--> userAndPaaswird {}", userAndPaaswird);
			}
		}
		return userAndPaaswird;
	}

	
	public User getUser(String userName) {
		Optional<UserEntity> userEntity = userRepository.findByUserName(userName);
		if (userEntity.isPresent()) {
			return new User(userEntity.get().getUserName(), userEntity.get().getPassword(), new ArrayList<>());
		}
		return null;

	}
}
