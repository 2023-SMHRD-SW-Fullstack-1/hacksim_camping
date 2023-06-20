import React from 'react'
import {Link , useNavigate } from 'react-router-dom'
import '../Header.css'
const Header = () => {
  
  const nav = useNavigate()
  let auth = false ;  //권한 >> 회원이 아닐때는 false
  
  const linkStyle = {
     textDecoration : 'none',
     color : 'green'
  }
  return (

    <div className='header_container'>


      <div id='logo'>
      <Link to="/" style={linkStyle}>모두의캠핑</Link>
      </div>

      <div id='search_container'>
        <div id="search">
          <input type="text" placeholder="검색어 입력" />
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </div>
      </div>
      <div id='content'>게시판
      <Link to="#"></Link>
      </div>

      <div id='login'>로그인 및 회원가입
      <Link to="#"></Link>
      </div>

    </div>

  )
}

export default Header
