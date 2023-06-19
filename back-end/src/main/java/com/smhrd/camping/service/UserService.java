package com.smhrd.camping.service;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.UserMapper;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	
//	public JSONObject userData(String email) {
//		
//	}
	
//	public JSONObject login(String email, String pw) {
//		mapper.login(email, pw);
//	}

	
	public User Join(User user) {
		return mapper.Join(user);
	}
	
	public User Login(User user) {
		return mapper.Login(user);
	}
	
	public int emailCheck(String inputEmail) {
		return mapper.emailCheck(inputEmail);
	}	
	
	
}
