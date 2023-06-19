package com.smhrd.camping.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.smhrd.camping.domain.User;

@Mapper
public interface UserMapper {

	// 회원가입
	@Insert("insert into tb_user(user_email, user_pw, user_nick) values(#{user_email},#{user_pw},#{user_nick})")
	public int Join(User user);
	
	// 로그인
	@Select("select * from tb_user where user_email=#{user_email} and user_pw=#{user_pw}")
	public User Login(User user);
	
}	