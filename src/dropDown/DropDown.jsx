import React, { useState } from 'react'
import './dropdown.css'

const countries =[
    {
        name:"India",
        value:"in",
        cities:["Delhi","mumbai"]
    },
    {
        name:"Pakistan",
        value:"Pak",
        cities:["Lahore","Karachi"]
    },
    {
        name:"bangladesh",
        value:"bg",
        cities:["Dhaka","Chittagaong"]
    },
]
const DropDown = () => {

    const [city,setCity]= useState(0);
  return (
    <div className="container">
        <select className="country" onChange={(e)=>{
            console.log(e.target.value);
            setCity(e.target.value);
        }} >
            {
                countries.map((item,index)=>{
                    return (
                        <option value={index} >{item.name}</option>
                    )
                })
            }
        </select>

        <select className="city" onChange={(e)=>{
            console.log(e.target.value);
        }} >
            {
                countries[city].cities.map((item,index)=>{
                    return (
                        <option value={index} >{item}</option>
                    )
                })
            }
        </select>

    </div>
  )
}

export default DropDown