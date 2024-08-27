// import React, { useEffect, useState } from 'react'
// import Card from './Card';

// const Pagination = () => {
//     const [products,setProducts] = useState([])
//     const [currentPage, setCurrentPage] = React.useState(1);
//     const [dataPerPage] = useState(10);




// useEffect(()=>{
//     const fetchProducts =async ()=>{
//         const res = await fetch(`https://dummyjson.com/products?skip=${(currentPage - 1) * dataPerPage}&limit=${dataPerPage}`);
        
//         const data =await res.json()
    
//         if(data && data.products ) setProducts(data.products);
       
//     }

//     fetchProducts() ;
     
// },[currentPage,dataPerPage])

// const onClickPrev = ()=>{
//     if(currentPage>1){
//         setCurrentPage(currentPage-1);
        
//     }
// }
// const onClickNext = ()=>{
//     if(currentPage<10){
//         setCurrentPage(currentPage+1);
//     }
// }

//   return (
//     <div>
//         <h1>Pagination</h1>
          

//        <div style={{display:'grid' , gridTemplateColumns:'auto auto'}}>
//        {
//             products.length>0 && products?.map((item,ind)=>{
//                 return <div key={ind}>
//                     <Card item={item} />
//                 </div>
//             })
//         }
//        </div>
//        <div style={{ margin:"10px" , padding:'10px ',display:"flex", gap:'5px', alignItems:'center',justifyContent:'center'}}>
//         <button onClick={onClickPrev}>Prev</button>
//         <span >{currentPage}</span>
//         <button onClick={onClickNext}>Next</button>
//        </div>
//     </div>
//   )
// }

// export default Pagination



//pagination at frontend side 

import React, { useEffect, useState } from 'react';
import Card from './Card';

const Pagination = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10); // Fixed number of items per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        if (data && data.products) {
          setAllProducts(data.products);
          setDisplayedProducts(data.products.slice(0, dataPerPage));
        }
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dataPerPage]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    setDisplayedProducts(allProducts.slice(startIndex, endIndex));
  }, [currentPage, allProducts, dataPerPage]);

  const onClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    // Calculate the maximum page number
    const maxPage = Math.ceil(allProducts.length / dataPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{width:'50vw' , margin:'auto '}}>
      <h1>Pagination</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
        {displayedProducts.length > 0 &&
          displayedProducts.map((item, ind) => (
            <div key={ind}>
              <Card item={item} />
            </div>
          ))}
      </div>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button disabled={currentPage===1} onClick={onClickPrev}>Prev</button>
        <span>{currentPage}</span>
        <button disabled={currentPage===Math.ceil(allProducts.length / dataPerPage)} onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
