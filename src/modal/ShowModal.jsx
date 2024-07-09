import React from 'react'

const ShowModal = ({handleClose,handleAccept}) => {

  const handleOutsideClick =(e)=>{
    console.log(e.target.className);
    if(e.target.className==='modal'){
      handleClose();
    }
  }

  return (
    <div className="modal" onClick={handleOutsideClick}>
        <div className="modal-container">
        <button className='back' onClick={handleClose}>X</button>
        <div className="content">
            click here to accept
        </div>
        <button className='accept' onClick={handleAccept} >Accept</button>
        </div>
  
    </div>
  )
}

export default ShowModal