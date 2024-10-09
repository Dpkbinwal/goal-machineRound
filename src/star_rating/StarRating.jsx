import React, { useState } from 'react'
import './starRating.css'

const StarRating = ({starCount}) => {
    const [value,setValue]=useState();
    const [hoverValue,setHoverValue]=useState(0);
    // console.log(hoverValue);
    console.log(value,'value');
  return (
    <div style={{fontSize:'30px', marginTop:'40px'}}>
    {new Array(starCount).fill(0).map((item,index)=>{
        return <span key={index}
        className={ hoverValue==0 && index<value || index<hoverValue ? 'gold':"goldHover"}
        onClick={()=>setValue(index+1)} 
        onMouseEnter={()=>setHoverValue(index+1)}
        onMouseLeave={()=>setHoverValue(0)}
        >
            
            &#9733;
            </span>
    })}</div>
  )
}

export default StarRating