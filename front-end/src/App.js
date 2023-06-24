
// import './App.css';

// import { BrowserRouter, Route , Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'


import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';


// import Write from './components/Write';
import Write_Test from './components/Write_Test'
import { useState, useEffect } from 'react';

import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';

import axios from 'axios'

import { Routes , Route } from 'react-router-dom'
import MainList from './components/MainList';

import Join from './components/Join';

import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';

import KakaoCallBack2 from './components/KakaoCallBack2';
import Mypage from './components/Mypage';


import Mypage_U from './components/Mypage_U';
import Comment from './components/Comment';

import ComunityDetail from './components/ComunityDetail';
import Item from './components/Item';

import intro from './intro-video.gif'

import Header2 from "./components/Header2.jsx"
import Notice from "./components/Notice.jsx"

import "./header2.js"
// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // import Swiper bundle with all modules installed


// // import styles bundle
// import 'swiper/css/bundle';
// import Swiper styles
import 'swiper/css';
// core version + navigation, pagination modules:

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



function App() {
  

  
  // const formData = new FormData();



  // useEffect(()=>{
  // axios.get("http://172.30.1.21:8088/gocamping/comunity/a")
  // .then((res)=>{
  //   console.log('결과',res.data);
  //   })
  // },[])


//   useEffect(()=>{
//   axios.post("http://172.30.1.43:8088/gocamping/comunity/write",
//   // formData,
//   // { 
//   //   headers:{"Content-Type" : "multipart/form-data"}
//   // }
// )
//   .then((res)=>{
//     console.log('결과',res.data);
//     })
//   },[])
// useEffect(() => {
//   const formData = new FormData();
//   formData.append('imageUrl', selectedFile);

//   axios
//     .post('http://172.30.1.43:8088/gocamping/comunity/write', formData)
//     .then((res) => {
//       console.log('결과', res.data);
//     })
//     .catch((error) => {
//       console.error('에러', error);
//     });
// }, []);


  

//   return (


//     <div>
//       <Header />
//       <Routes>
      
//         <Route path='/' element={<Figure /> } />
//         <Route path='/write1' element={<Write />} />
//       </Routes>

//       <Footer />

//     </div>

//   );
// }function App() {
  
  const [inputTitle, setInputTitle] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [comunity, setComunity] = useState([]);


  const [user_email,setUser_Email] = useState("");
  const [user_pw, setUser_PW] = useState("");
  const [user_nick, setUser_Nick] = useState("");
  const[user_type,setUser_Type] = useState("");

  return (
    
    <div>
{/* 수진 */}
{/* <Header/> */}
{/* <Nav/> */}
<Header2/>
      {/* 여기가 동영상 코드 */}
      <div style={{height:"56px"}}></div>
      <div style={{height:'50vh',background:`url(${intro})`,backgroundSize:'cover', textAlign:"center", padding:"auto 0", display:"flex",justifyContent:"center" ,alignItems:"center"}}>
        <h1 style={{display:"inline-block", color:"white", fontSize:"7.5vw", fontWeight:"900", fontFamily:"Pretendard Variable"}}> 모두의 캠핑 </h1>
      </div>

      {/* <div style={{height:'100vh',background:`url(${intro})`,backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}></div> */}

<Notice />
      
      
    
      <Routes>


        <Route path="/" element={<Figure />} />
        {/* <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} /> */}
        <Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} />
        <Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity}/>}/>

      
        {/* <Route path='/' element={<Figure /> } />
        <Route path='/write1' element={<Write />} />

        <Route path="/comunity" element={<SyLoadBoardList /> }/> */}

        
        <Route path="/ContentDeatil/:num" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} comunity={comunity} setComunity={setComunity}/>} />
      
      {/* <Route path='/ComunityDetail:num' element={<ComunityDetail comunity={comunity}/>}></Route> */}




      <Route path='/' element={<Figure/>} />
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/login' element={<Login user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      <Route path='/join' element={<Join user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
      <Route path='/kakaocallback' element={<KakaoCallBack user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      <Route path='/kakaocallback2' element={<KakaoCallBack2 user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      {/* 여기부터~~ */}
      <Route path='/mypage_U' element={<Mypage_U/>} />
      <Route path='/comment' element={<Comment/>} />
      {/* 여기까지~~ */}

      </Routes>

      <Footer />
    </div>
  );
}

export default App;