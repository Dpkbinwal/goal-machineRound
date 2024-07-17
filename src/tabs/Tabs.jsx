
import React from 'react';
import './tabs.css'
import TabsData from './TabsData';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Tabs =()=>{
    
    return (
        <>
        <div style={{display:'flex', justifyContent: 'center',alignItem:'center',gap:'10px',marginTop:'20px'}}>
            <TabsData>
                <div title='home'><Home/></div>
                <div title="about"><About/></div>
                <div title="contact"> <Contact/></div>
            </TabsData>
        </div>
        </>
    )
}
export default Tabs;