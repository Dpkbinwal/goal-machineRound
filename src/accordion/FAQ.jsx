import React, { useState } from 'react'
import Accordion from './Accordion'
import qna from './qna.json'

const FAQ = () => {
 
  return (
    <div style={{width:'40%', margin:'auto'}}>
    <h1>FAQ</h1>

    {
            qna?.map((val,index)=>{
                return  <Accordion key={index} data={val} />
            })
        }

   
    </div>
  )
}

export default FAQ