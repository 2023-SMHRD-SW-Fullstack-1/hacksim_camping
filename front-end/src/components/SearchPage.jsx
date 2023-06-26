import React, { useEffect, useState } from 'react'
import '../Mypage.css'
import { useNavigate } from 'react-router-dom'
const SearchPage = ({ world, setWorld, searchList }) => {

    const nav = useNavigate();
    const [searchDataLength,setSearchDataLength] = useState('')
    useEffect(() => {
    let searchWord = '';
    console.log('서치페이지입니다');
    console.log('검색결과 :',searchList.length);
    setSearchDataLength(searchList.length);



        // searchWorld = world


    }, [])

    return (

       

        // <div id='hj_mypage'>
        <div>
            <div id='hj_user-container'>검색결과 총{searchDataLength} 건 </div>
            <div id='hj_columns'>
                {searchList.map((item, index) => (
                    <figure key={index}>
                        <img onClick={()=>{nav(`/comunity/ContentDeatil/${item.story_idx}`)}} src={`http://localhost:8088/gocamping/${item.story_img}`} alt={`Image ${index}`} />
                        <figcaption>{item.story_title}</figcaption>
                    </figure>
                ))}

            </div>
        </div>

    )
}

export default SearchPage