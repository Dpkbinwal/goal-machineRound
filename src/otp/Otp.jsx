import React, { useEffect, useRef, useState } from 'react'
import "./otp.css"
const Otp = ({ len }) => {

  const arr = new Array(6).fill('');
  const refs= [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
  const [val,setVal] =useState(arr);
  const [missed,setMissed] =useState(arr);

  useEffect(()=>{
      refs[0].current.focus();
  },[])

  const handleChange = (e,i)=>{
      const value=e.target.value;
      // console.log(e);
      if(!Number(value)){
        return ;
      }

      if(i<val.length-1){
          refs[i+1].current.focus();
      }
      
      const copyInput = [...val];
      copyInput[i]=value;
      setVal(copyInput);
      
    }

    const handleKeyDown=(e,i)=>{
      console.log(e.keyCode,'keydown');
      if(e.keyCode === 8){
        const copyInputs=[...val];
        copyInputs[i]=''
        setVal(copyInputs);
        if(i>0){
          refs[i-1].current.focus();
        }
      }
      
    }

    const handleSubmit = ()=>{
        const missed = val.map((item,i)=>{
          if(item=== ''){
            return i;
          }
        }).filter((item)=>(item || item ===0));
        setMissed(missed);

        if(missed.length==0){
          const userInput= val.join('');
        const expectedInput = 222222;
        const isMatch = userInput == expectedInput;
        
       
        if(isMatch) {alert ("code is valid")}
        else{alert("code is invalid")}
        }
    }
   
  return (
    <div style={{width:'50%',margin:'auto'}}>
      <h1 >Opt Verfication</h1>
      <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
        {
          arr.map((item, i) => {
            return <div>
              <input 
              key={i} 
              value={val[i]}
              type="text" 
              ref={refs[i]}
              onChange={(e)=>handleChange(e,i)}
              onKeyDown={(e)=>handleKeyDown(e,i)}
              className={missed.includes(i)? 'error':''}
              maxLength="1" />
            </div>
          })
        }
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Otp