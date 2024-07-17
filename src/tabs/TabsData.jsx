import React, { useEffect, useState } from 'react'
import './tabs.css'
const TabsData = (props) => {
    const {children} = props;
    const [tab,setTab]=useState([]);
    const [mapData,setMapData]=useState({});
    const [selectedTab,setSelectedTab]=useState("home")

    
    useEffect(()=>{
        const Header=[];
        const mapContent={};

        React.Children.forEach(children, (child)=>{
            // console.log(child);
            const {title,children}= child.props;
            // console.log(title)

            Header.push(title); 
            mapContent[title]=children;

        })
        setTab(Header);
        setMapData(mapContent);
    },[props,children])
    
    const handleClick=(e)=>{
        // setSelectedTab(e);
        setSelectedTab(e.target.value)
        // console.log(e);
    }
   

  return (
    <div>
        <div >
            {tab.map((e,ind)=>{
                return <button 
                className='btn'
                value={e}
                onClick={(e)=>handleClick(e)}
                >{e}</button>
            })} 
        </div>

        <div>
           {
            mapData[selectedTab]
           }
        </div>
    </div>
  )
}

export default TabsData