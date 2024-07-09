import React, { useState } from 'react'
import Accordion from './Accordion'
import qna from './qna.json'

const FAQ = () => {
 
  return (
    <>
    <h1>FAQ</h1>

    {
            qna?.map((val,index)=>{
                return  <Accordion key={index} data={val} />
            })
        }

   
    </>
  )
}

export default FAQ