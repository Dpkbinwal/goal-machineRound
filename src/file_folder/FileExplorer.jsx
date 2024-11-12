import React, { useState } from 'react'


const FileExplorer = ({data}) => {
  
  const [toggle, setToggle] = useState(false);

 
  return (
    <div style={{marginLeft:"50px"}}>
      <h3 style={{display:"flex"}} >{data?.type === 'folder'?"📁":'🗄'}
        <span onClick={()=>setToggle(!toggle)}>{data.name}</span>
      </h3>
      
      {
        toggle && data?.children?.map((item, index) => {
          return <FileExplorer data={item}/>
        })
      }

    </div>
  )
}

export default FileExplorer