import React from 'react'

const ProgressBar = ({progress, color}) => {
    const styleobj ={
        width: `${progress}%`,
        backgroundColor: color|| 'lightgreen',
        height:30,
        borderRadius: 10,

    }
  return (
    <div className="contain" style={{width:'70%',marginTop:'40px'}}>
        <div style={{backgroundColor:'white',borderRadius:'10px'}}>
            <div style={styleobj}>
                {`${progress}%`}
            </div>
        </div>
    </div>
  )
}

export default ProgressBar