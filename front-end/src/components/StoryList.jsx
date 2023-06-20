import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
// import StoryItem from './StoryItem'

const StoryList = ({}) => {
  const [list, setList] = useState([]);
    console.log('prop : ', list);

    useEffect(()=>{
      axios.get("http://172.30.1.9:8088/gocamping/comunity")
      .then((res)=>{
        console.log(res.data);
        setList(res.data);
      })
    }, [])
     
    //type filter 작업을 거치고 사용할 list

   const[typeParams, setTypeParams] = useSearchParams('');
   let type = typeParams.get('type')
 

   // type filter 작업을 거치고 사용할 list
   let newList = type !== null && list.filter(item=>item.comunity.story_category == '기본')
   
   const nav = useNavigate()
  return (
    <div className='a'>
     
      {
        list.map((item)=> (<div>글 제목 : {item.comunity.story_title}</div>))
      }
    </div>
  )
}

export default StoryList