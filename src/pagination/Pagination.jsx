import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [products,setProducts] = useState([])
    const [currentPage, setCurrentPage] = React.useState(1);

const fetchProducts =async ()=>{
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data =await res.json()

    if(data && data.products ) setProducts(data.products);
   
}


useEffect(()=>{
    fetchProducts()
},[])

  return (
    <div>
        <h1>Pagination</h1>

        {
            products.length>0 && products?.map((item,ind)=>{
                return <div key={ind}>
                    <img src={item.thumbnail} alt={item.title} />
                    {item.title}
                </div>
            })
        }
    </div>
  )
}

export default Pagination