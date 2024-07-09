import React, { useState } from 'react'
import './modal.css'
import ShowModal from './ShowModal';

const Modal = () => {
    const [show, setShow] = useState(false);
    console.log(show);
    const [accept, setAccept] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleAccept = () => {
        setAccept(true);
        setShow(false);
    }
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                {accept ? <h1>Accepted</h1> : <button onClick={() => setShow(!show)} >Show</button>
                }
            </div>
            {show && <ShowModal handleClose={handleClose} handleAccept={handleAccept} />}

        </div>
    )
}

export default Modal