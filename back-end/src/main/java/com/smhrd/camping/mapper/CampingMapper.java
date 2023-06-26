package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.smhrd.camping.domain.Category;
import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.Tags;
import com.smhrd.camping.domain.User;

@Mapper
public interface CampingMapper {

	//comunity 전체 정보 불러오기
	public List<Comunity> ComunityList(); //게시판 게시물 조회
	

	
	
	public int write(Comunity comunity); //게시물 작성
	
	public int addTags(Tags tag); // 태그 추가하기
	
	public List<Category> CategoryStep(); //상품 카테고리 스텝
	
	
	//상세 게시물에 댓글 추가
	@Insert("insert into tb_comment(cmt_idx,story_idx,cmt_content,user_email) values(#{cmt_idx},#{story_idx},#{cmt_content},#{user_email})")
	public int comment(Comment comment); //댓글 작성
	
	//상세 게시물 불러오기
	@Select("select * from tb_story where story_idx=#{story_idx}")
	public Comunity ComunityOne(int story_idx);
	
	
	public  List<Comment> CommentList(int idx); //댓글 리스트 
	
	// public List<Comunity> searchComunity(String search); //게시물 검색

	public int CommentDelete(int cmt_idx, String user_email); //댓글 삭제

	// 게시물 -> 좋아요순으로 
	public List<Comunity> LoadCommunityLike();
	
	// 게시물 -> 조회수 순으로 
	public List<Comunity> LoadCommunityView();

	public List<Comunity> searchComunity(String query);
	
	// CampingMapper.java에 코드 추가
	public List<Comunity> sortedComunity(String mode);


	
}
