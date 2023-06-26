
import React, { useEffect, useState } from 'react'
import Comment from "./Comment"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Comment_test from './Comment_test'
import Footer from './Footer'

const ContentDetail = ({tableMarginTB, contentImgHeight, contentImgWidth, tableWidth, comunity,setComunity}) => {

	let realImgUrl = ""
	const {idx} = useParams();
	const story_idx = `${idx}`;



	
	console.log(`Index Value: ${idx}`);
console.log('스토리인덱스 :',story_idx);
	useEffect(() =>{
		axios.post('/gocamping/comunity/one', story_idx, {
			headers: {
			  'Content-Type': 'application/json'
			}
		  })
		.then((res) => {
		  console.log('게시판 디테일 가져오기', res.data);
		  setComunity(res.data);
		  
		})
		.catch((error) => {
		  console.log('API Error:', error);
		});
	},[])
	
	// realImgUrl = "https://images.unsplash.com/photo-1620439032751-d2011065c735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
	return (

		<div style={{position:"relative"}}>
			{console.log("return문")}
			
			<table style={{ border: "1px solid blue", textAlign: "center", margin: `${tableMarginTB}px auto`, width:tableWidth, height:"auto" }}>

				<tbody>
					<tr>
						<th>제목</th>
						<td>{comunity.story_title}</td>
						
					</tr>

					<tr style={{ border: "1px solid pink" }}>
						<th>작성자</th>
						<td style={{ border: "1px solid pink" }}>{comunity.user_email}</td>
					</tr>

					<tr style={{ border: "1px solid pink" }}>
						<th>이미지</th>
						<td style={{ border: "1px solid pink", position: "relative" }}>
						{comunity.story_img!=undefined&& <td style={{ border: "1px solid pink" }}> <img width='250px' src={`http://172.30.1.43:8088/gocamping/${comunity.story_img}`}/> </td>}
						</td>
					</tr>

					<tr style={{ border: "1px solid pink" }}>
						<th>내용</th>
						<td style={{ border: "1px solid pink" }}>오늘 캠핑 다녀 왔어요~</td>
					</tr>
				</tbody>
			</table>
			

						
			<Comment_test />




			{/* <div style={{ height: "30px" }} /> */}


		
		</div>
	)
}

export default ContentDetail