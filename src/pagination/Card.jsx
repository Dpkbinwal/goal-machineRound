import React from 'react'

const Card = ({item}) => {
  return (
    <div style={{margin:'4px',padding:'4px', display:"flex" , border:"1px solid grey" ,borderRadius:"10px"}}>
        <img src={item.images} width={150} height={150} alt=""/>
        <div style={{margin:'auto', }}>
        <span>{item.title}</span>
        <span>${item.price}</span>
        <div style={{ display:'flex',gap:'4px'}}>
            <button>Add To Cart</button>
            <button>Buy Now</button>
        </div>
        </div>
        
    </div>
  )
}

export default Card