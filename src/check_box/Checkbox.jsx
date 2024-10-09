import React, { useState } from 'react'

const Checkbox = () => {
    const [state,setState] =useState({
        check1:false,
        check2:false,
        check3:false,
        check4:false
    });



    const handleClick = (event)=>{
       const {name,checked}=event.target;
       console.log(name,checked)

       setState((prev)=>({
        ...prev,
        [name]: checked
       }))
    }

    
    function setAll(){
        const allChecked = state.check1 && state.check2 && state.check3 && state.check4;
        setState({
            check1:!allChecked,
            check2:!allChecked,
            check3:!allChecked,
            check4:!allChecked});
    }
    console.log(state);
  return (
    <div style={{padding:"20px", fontSize:'25px'}}>

        <div>
            <input checked={state.check1 && state.check2 && state.check3 && state.check4} onChange={setAll} name="all" type="checkbox"/>
            <label for="all">SelectAll</label>
        </div>      
        <div>
            <input checked={state.check1} id="check1" name="check1" type="checkbox" onChange={handleClick}/>
            <label for="check1">1</label>
        </div>
        <div>
            <input checked={state.check2} id='check2'  name="check2" type="checkbox" onChange={handleClick}/>
            <label for="check2">2</label>
        </div>
        <div>
            <input checked={state.check3} id='check3'  name="check3" type="checkbox" onChange={handleClick}/>
            <label for="check3">3</label>
        </div>
        <div>
            <input checked={state.check4} id='check4'  name="check4" type="checkbox" onChange={handleClick}/>
            <label for="check4">4</label>
        </div>
    </div>
  )
}

export default Checkbox