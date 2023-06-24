
import React, { useState } from 'react'
import Comment from "./Comment"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ContentDetail = ({tableMarginTB, contentImgHeight, contentImgWidth, tableWidth, comunity,setComunity}) => {
	let realImgUrl = ""
	let {num} = useParams();

	const [index, setIndex] = useState(0);
	axios
          .get(`http://172.30.1.9:8088/gocamping/comunity/${num}`)
          .then((res) => {
            console.log('API Response:', res.data);
            setComunity(res.data);
            
            
          })
          .catch((error) => {
            console.log('API Error:', error);
          });

	realImgUrl = "https://images.unsplash.com/photo-1620439032751-d2011065c735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
	return (
		<div style={{position:"relative"}}>
			
			<table style={{ border: "1px solid blue", textAlign: "center", margin: `${tableMarginTB}px auto`, width:tableWidth, height:"auto" }}>
				<tbody>
					<tr>
						<th>제목</th>

						<td style={{ border: "1px solid pink" }}> {comunity.comunity[num].story_title} </td>

					</tr>

					<tr style={{ border: "1px solid pink" }}>
						<th>작성자</th>
						<td style={{ border: "1px solid pink" }}>캠핑 좋아</td>
					</tr>

					<tr style={{ border: "1px solid pink" }}>
						<th>이미지</th>
						<td style={{ border: "1px solid pink", position:"relative" }}>
							<img src={realImgUrl} style={{height: contentImgHeight, width: contentImgWidth}} />
						</td>
					</tr>

					<tr style={{ border: "1px solid pink" }}>
						<th>내용</th>
						<td style={{ border: "1px solid pink" }}>오늘 캠핑 다녀 왔어요~</td>
					</tr>
				</tbody>
			</table>
						
			<Comment />

			<div style={{height: "30px"}} />
		</div>
	)
}

export default ContentDetail