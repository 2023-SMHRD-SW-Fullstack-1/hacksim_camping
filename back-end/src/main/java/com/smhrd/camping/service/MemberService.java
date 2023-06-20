package com.smhrd.camping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.camping.domain.Member;
import com.smhrd.camping.mapper.MemberMapper;

@Service
public class MemberService {
	@Autowired
	private MemberMapper mapper;
	
	public List<Member> memberList(){
		return mapper.memberList();
	}


		 
	 
}
