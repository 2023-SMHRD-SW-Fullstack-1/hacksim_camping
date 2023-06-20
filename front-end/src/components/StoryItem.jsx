import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryItem = ({item, idx}) => {
    const nav = useNavigate()

    console.log("item :" , item, 'idx : ', idx);
  return (
    <div className='product-container' onClick={()=>{nav(`/detail/`)}}>
        <img width='100px' src={item.src}></img>
        <p>{item.title}제목</p>
    </div>
  )
}

export default StoryItem