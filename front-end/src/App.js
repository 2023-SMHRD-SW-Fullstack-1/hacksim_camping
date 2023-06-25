
// import './App.css';
// import { BrowserRouter, Route , Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'


//컴포넌트
import Nav from './components/Nav'
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Write_Test from './components/Write_Test'
import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';
import MainList from './components/MainList';
import Comment from './components/Comment';

import Join from './components/Join';
import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';
import KakaoCallBack2 from './components/KakaoCallBack2';

import Mypage from './components/Mypage';
import Mypage_U from './components/Mypage_U';

// 임시
import Test from './components/Test';


// 추가
// import ComunityDetail from './components/ComunityDetail';
// import Item from './components/Item';
// import Logout from './components/Logout';
// import Update from './components/Update.jsx';

function App() {
	// 글쓰기
	const [inputTitle, setInputTitle] = useState("");
	const [inputUserEmail, setInputUserEmail] = useState("");
	const [inputContent, setInputContent] = useState("");
	const [comunity, setComunity] = useState([]);

	// 로그인, 회원가입
	const [user_email, setUser_Email] = useState("");
	const [user_pw, setUser_PW] = useState("");
	const [user_nick, setUser_Nick] = useState("");
	const [user_type, setUser_Type] = useState("");


	return (

		<div>
			<Nav/>
			{/* <Header /> */}
			<div style={{height:"80px"}}></div>
			
			<Link to="/">홈 메인화면 </Link>|
			<Link to="/write3"> 글쓰기 </Link>|
			<Link to="/comunity/contentDetail"> 글 보기(/comunity/contentDetail) </Link>|
			<Link to="/content"> /content </Link>|
			<Link to="/mypage"> 마이페이지 </Link>|
			<Link to="/mypage_u"> 마이페이지2 </Link>|
			<Link to="/write1"> 글쓰기1 </Link>|
			<Link to="/login"> 로그인 </Link>|
			<Link to="/join"> 회원가입 </Link>|
			<Link to="/test">/test</Link>
			
			<Routes>

				<Route path="/" element={<Figure />} />
				{/* <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} /> */}
				<Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent} />} />
				<Route path="/write3" element={<Write />} />
				<Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity} />} />


				{/* <Route path='/' element={<Figure /> } />
				<Route path='/write1' element={<Write />} />*/}
				<Route path="/content" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} />} />
				<Route path="/comunity/contentDetail" element={<SyLoadBoardList />} />
				<Route path="/test" element={<Test />} />




				<Route path='/' element={<Figure />} />
				<Route path='/mypage' element={<Mypage />} />
				<Route path='/login' element={<Login user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
				<Route path='/join' element={<Join user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
				<Route path='/kakaocallback' element={<KakaoCallBack user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
				<Route path='/kakaocallback2' element={<KakaoCallBack2 user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
				{/* 여기부터~~ */}
				<Route path='/mypage_U' element={<Mypage_U />} />
				<Route path='/comment' element={<Comment />} />
				{/* 여기까지~~ */}

			</Routes>

			<Footer />
		</div>
	);
}

export default App;
