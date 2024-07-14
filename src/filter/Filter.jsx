import React, { useEffect, useState } from 'react'
import './filter.css'
import product from './product.json'

const Filter = () => {

    const category = ['thought','programming','fiction','anime'];
    const [filteredData,setFilteredData]= useState([]);
    const [activeFilter,setActiveFilter]= useState([]);
    
    const handleCategoryclick =(e)=>{
       const category = e.target.id;

       if( activeFilter.includes(category) ){
        const filters = activeFilter.filter((el)=>el!==category)
        // console.log(filters);
        setActiveFilter(filters);
       }else{
        setActiveFilter([...activeFilter,category]);
       }
       
    }
    
    console.log(activeFilter);

    const filterProducts =()=>{
        if(activeFilter.length>0){
            const tempItem= product.filter((item)=>activeFilter.includes(item.categoery))
            setFilteredData(tempItem);
        }else{
            setFilteredData(product);
        }
    }
    console.log(filteredData);
    useEffect(()=>{
        filterProducts();
    },[activeFilter])

  return (
    <div style={{textAlign: 'center',maxWidth: '800px' ,margin:'0px auto'}} >
        <h1 styles={{textAlign: 'center'}} >The Filter</h1>

        <div className='cat' onClick={handleCategoryclick}>
            {
                category.map((item,i)=>(
                    <div>
                    <button key={i} 
                    className={activeFilter.includes(item)?'selected':''}
                    id={item} >{item}</button>
                    </div>
                ))
            }
        </div>

        <div className='product'>
            {
                filteredData.map((item,i)=>{
                    return <div key={i} className='item'>
                        <h3>{item.name}</h3>
                        <p>{item.categoery}</p>
                    </div>
                })
            }
        </div>
        
    </div>

  )
}

export default Filter