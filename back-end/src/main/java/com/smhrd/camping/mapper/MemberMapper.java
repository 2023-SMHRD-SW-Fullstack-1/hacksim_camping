package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

import com.smhrd.camping.domain.Member;

@Mapper
public interface MemberMapper {


		public List<Member> memberList();
		
		// 회원정보수정 (어노테이션작성법)
	    @Update("update webmember set pw=#{pw}, tel=#{tel}, address=#{address} where email=#{email}")
	    public int update(Member m);
	    
}
