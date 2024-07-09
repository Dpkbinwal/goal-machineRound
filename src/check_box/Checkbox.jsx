import React, { useState } from 'react'

const Checkbox = () => {
    const [state,setState] =useState({
        check1:false,
        check2:false,
        check3:false,
        check4:false
    });



    const handleClick = ()=>{
        
        setState({...state,"check1":!state.check1});
    }

    const handleClick2 = ()=>{
        
        setState({...state,"check2":!state.check2});
    }
    const handleChange3 = ()=>{
        
        setState({...state,"check3":!state.check3});
    }
    const handleChange4 = ()=>{
        setState({...state,"check4":!state.check4});
    }
    function setAll(){
        setState({
            check1:!state.check1,
            check2:!state.check2,
            check3:!state.check3,
            check4:!state.check4});
    }
    console.log(state);
  return (
    <div style={{padding:"20px"}}>

        <div>
            <input checked={state.check1 && state.check2 && state.check3 && state.check4} onChange={setAll} name="all" type="checkbox"/>
            <label for="all">SelectAll</label>
        </div>      
        <div>
            <input checked={state.check1} id="check1" name="check1" type="checkbox" onChange={handleClick}/>
            <label for="check1">1</label>
        </div>
        <div>
            <input checked={state.check2} name="check2" type="checkbox" onChange={handleClick2}/>
            <label for="check2">2</label>
        </div>
        <div>
            <input checked={state.check3} name="check3" type="checkbox" onChange={handleChange3}/>
            <label for="check3">3</label>
        </div>
        <div>
            <input checked={state.check4} name="check4" type="checkbox" onChange={handleChange4}/>
            <label for="check4">4</label>
        </div>
    </div>
  )
}

export default Checkbox