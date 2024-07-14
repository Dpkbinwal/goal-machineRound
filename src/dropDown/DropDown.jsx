import React, { useState } from 'react'

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
    <>
        <select onChange={(e)=>{
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

        <select onChange={(e)=>{
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

    </>
  )
}

export default DropDown