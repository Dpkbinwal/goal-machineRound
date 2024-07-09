import React, { useState } from 'react'

const Accordion = ({data}) => {
    const [show,setShow]= useState(false);
    // console.log(show)
  return (
    <div  style={{border:"2px solid black ", margin:"0.5rem 0",padding:"0.5rem", position:"relative"}}>
        <h3 style={{}}>{data.question}
            <span onClick={()=>setShow(!show)} style={{position:"absolute", right:"2rem", cursor:"pointer"}}>
                {show?'-':'+'}

            </span></h3>
        {show && <p>{data.answer}</p>}
    </div>
  )
}

export default Accordion