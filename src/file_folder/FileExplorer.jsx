import React, { useState } from 'react'


const FileExplorer = ({data}) => {
  
  const [toggle, setToggle] = useState(false);

  console.log(data);
  return (
    <div style={{marginLeft:"50px"}}>
      <h1>{data?.type === 'folder'? "folder ":"file "}
        <span onClick={()=>setToggle(!toggle)}>{data.name}</span>
      </h1>
      
      {
        toggle && data?.children?.map((item, index) => {
          return <FileExplorer data={item}/>
        })
      }

    </div>
  )
}

export default FileExplorer