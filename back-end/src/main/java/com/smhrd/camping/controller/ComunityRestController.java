package com.smhrd.camping.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.service.ComunityService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ComunityRestController {

	@Autowired
	private ComunityService service;
	
	@GetMapping("/comunity") // 게시글 가져오기
	public JSONArray ComunityList() {
		System.out.println("테스트");
		JSONArray array = service.ComunityList();
		
		return array;
	}
	
	@GetMapping("/{idx}") 
	public JSONObject ComunityOne(@PathVariable("idx") int idx) {
		return service.ComunityOne(idx);
	}
	
	
	@PostMapping("/comunity/write") // 글 업로드하기
	public String write(Comunity c, @RequestPart("story_img") MultipartFile file) {
		String newFileName = UUID.randomUUID().toString() + file.getOriginalFilename();
		// 이미지 file -> 저장(지정된 경로에)
		try {
			file.transferTo(new File(newFileName));
			
			
		}catch(IllegalStateException e) {
			e.printStackTrace();
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		c.setStory_img(newFileName);
		//c(Comunity) -> title, ~~~~ photo(filename)
		//comunity table(DB) -> 랜덤숫자+파일 이름만 저장
		int cnt = service.write(c);
		
		if(cnt>0) {
			return "redirect:/comunity";
		}
		else {
			return "redirect:/write";
		}
		
	}
	
	@GetMapping("/comunity/a") //카테고리 가져오기
	public String category() { //carray : 카테고리 스텝 array
		String carray = service.CategoryStep();
		return carray;
		}
		
	

	
	
}
