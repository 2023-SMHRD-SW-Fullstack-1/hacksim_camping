package com.smhrd.camping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.camping.mapper.MemberMapper;

import jakarta.servlet.http.HttpSession;

@Controller 
public class MemberController {

	@Autowired
	private MemberMapper mapper;
	

	
	
}
