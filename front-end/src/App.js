import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';

import Header2 from './components/Header2';
import Comment_HJ from './components/Comment_HJ';
// import Write from './components/Write';

import Write_Test from './components/Write_Test'
import { useState, useEffect } from 'react';
import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';
import axios from 'axios'

import { Routes, Route } from 'react-router-dom'
import MainList from './components/MainList';
import SearchPage from './components/SearchPage';
import Join from './components/Join';
import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';
import KakaoCallBack2 from './components/KakaoCallBack2';
import Mypage from './components/Mypage';
import Comment from './components/Comment';
import ComunityDetail from './components/ComunityDetail';
import Item from './components/Item';
import Logout from './components/Logout';


import Update from './components/Update';

import MyPage_A from './components/MyPage_A';
import AllUser from './components/AllUSer';
import AllStory from './components/AllStory';
import Search from './components/Search';
import StoryList from './components/StoryList';
import BestList from './components/BestList';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Notice from './components/Notice';
import intro from './intro-video.gif'
import StoryList2 from './components/StoryList2';


function App() {

        //검색기능 props 정의
        const [searchList, setSearchList] = useState([])
        const [searchDataLength, setSearchDataLength] = useState('');
        const [world, setWorld] = useState('');


        //회원가입,로그인 props 정의
        const [inputUserEmail, setInputUserEmail] = useState("");
        const [inputContent, setInputContent] = useState("");
        const [comunity, setComunity] = useState([]);


        const [inputTitle, setInputTitle] = useState("");



return(
	<div>
		{/* <Header /> */}
                {/* <Header world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList} /> */}
    

                <Header2 world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList}/>
      {/* 여기가 동영상 코드 */}
      <div style={{height:"56px"}}></div>
      <div style={{height:'50vh',background:`url(${intro})`,backgroundSize:'cover', textAlign:"center", padding:"auto 0", display:"flex",justifyContent:"center" ,alignItems:"center"}}>
        <h1 style={{display:"inline-block", color:"white", fontSize:"7.5vw", fontWeight:"900", fontFamily:"Pretendard Variable"}}> 모두의 캠핑 </h1>
      </div>

      {/* <div style={{height:'100vh',background:`url(${intro})`,backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}></div> */}

    

                        
		<Routes>
                        {/* 헤더 */}
                        <Route path='/searchpage' element={<SearchPage world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList} />} />

                        {/* 메인페이지 */}
                        
                        <Route path='/' element={<MainList comunity={comunity} setComunity={setComunity} />} />
                       
                        
                        {/* 게시판 */}

                        <Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail}
                         inputContent={inputContent} setInputContent={setInputContent} />} />
                        <Route path='/write' element={<Write/>}/> 
                        <Route path='/comunity/ContentDetail/comment' element={<Comment />} />
                        <Route path="/comunity/ContentDetail/:idx" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} comunity={comunity} setComunity={setComunity} />} />
			<Route path="/comunity/contentDetail" element={<SyLoadBoardList />} />
                        <Route path='/comunity/list/:page' element={<StoryList2/>}/>

                        {/* 마이페이지 */}
                        <Route path='/mypage/mycomment' element={<Comment_HJ />} />
                        <Route path='/mypage' element={<Mypage />} />
                        <Route path='/mypage/update' element={<Update />} />



                        {/*  로그인 */}
                        <Route path='/logout' element={<Logout />} />
			<Route path='/login' element={<Login />} />
                        <Route path='/kakaocallback2' element={<KakaoCallBack2 />} />


                      
                        {/* 회원가입 */}
                        <Route path='/join' element={<Join />} />
                        <Route path='/join/kakaocallback' element={<KakaoCallBack />} />

                        

                         {/* 게시판 */}
                        <Route path='/bestList' element={<BestList />} />
                        {/* <Route path='/storyList' element={<StoryList />} /> */}



                        {/* 관리자용 마이 페이지 */}
                        <Route path='/mypage_A' element={<MyPage_A />} />
                        <Route path='/allUser' element={<AllUser />} />
                        <Route path='/allstory' element={<AllStory />} />
			
			</Routes>

                        <Footer/>
		</div>

)

}

export default App;