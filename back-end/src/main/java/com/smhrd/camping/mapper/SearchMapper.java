package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.smhrd.camping.domain.Comunity;

@Mapper
public interface SearchMapper {

	//링크 가져오기 기능
	@Select("select product_link from tb_poi where story_idx=#{getlink}")
	public String getLink(int getlink);
	// 내가 검색한 검색어를 가지고 있는 게시물 리스트 가져오기
	@Select("SELECT * FROM tb_story WHERE story_content LIKE '%'||#{getWorld}||'%' or story_title LIKE '%'||#{getWorld}||'%'")
	public List<Comunity> Search(String getWorld);

	// 마이페이지에서 내가 작성한 게시글 가져오기
	@Select("SELECT * FROM tb_story WHERE user_email=#{user_email1}")
	public List<Comunity> myStory(String user_email1);

}