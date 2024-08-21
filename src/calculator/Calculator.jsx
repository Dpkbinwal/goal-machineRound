import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState();
    const arr=['1','2','3','4','5','6','7','8','9','0',
        '+','-', '*', '/', '=','C'];

    const handleChange = (e) =>{
        console.log(e.target.value)
        setValue(e.target.value);
    }
  return (
    <div style={{width:'400px', height:'400px' , backgroundColor:'white' ,borderRadius:'20px', margin:'50px auto'}}>
        <h1>Calculator</h1>
       <form>
       <input type="text" placeholder="enter value" style={{padding:'5px',borderRadius:'10px',border:'dashed'}} value={value} onChange={(e)=>handleChange(e)}/>
       </form>
       <div style={{display:'flex' , flexWrap:'wrap' ,margin:'55px',alignItems:'center',justifyContent:'center' ,gap:'15px',textAlign:'center'}}>
        {arr.map((val,ind)=>{
            return <button id={val} onClick={(e)=>setValue(e.target.id)} key={ind} style={{backgroundColor:'grey',width:'30px', padding:'10px 20px',borderRadius:'10px',border:'none'}}>{val}</button>
           
        })}
       </div>
        </div>
  )
}

export default Calculator