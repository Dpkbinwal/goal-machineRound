import React, { useEffect, useState } from 'react'

const Swap = () => {

    const [list1 , setList1]=useState([{title:'list 1',checked:false},
        {title:'list 2',checked:false},
        {title:'list 3',checked:false}
    ])

    const [list2,setList2]= useState([{title:'list a',checked:false},
        {title:'list b',checked:false},
        {title:'list c',checked:false}])


    const handleCheck =(ind)=>{
        // console.log(ind)
        const updated= [...list1]; 
        updated[ind].checked=!updated[ind].checked;
        console.log(updated);
        setList1(updated);
        // console.log(ind);
        
    }
    const handleSwap = ()=>{
        // console.log("button click")
        const updated1= [...list1];
        const updated2= [...list2];

        updated1.forEach((item,ind)=>{
            if(item.checked){
                const temp= item.title;
                item.title=updated2[ind].title;
                updated2[ind].title=temp;
                item.checked=false;
                // console.log(item.checked)
            }
            
        })

        setList1(updated1);
        setList2(updated2);
        // console.log(updated1);
    }

  return (
   <>
   <h1>Swap the Checked Item btw two list </h1>
   <br/>
   
   <ol>
   {list1.map((el, ind) => (
                    <li key={ind}>
                        <input
                            type="checkbox"
                            checked={el.checked}
                            onChange={() => handleCheck(ind)}
                        />
                        {el.title}
                    </li>
                ))}
    
   </ol> 

   <ul>
   {
        list2.map((el,ind)=>{
            return <li key={ind}>{el.title}</li>
           
        })
    }
   </ul> 
     <button onClick= {handleSwap}>
        Swap Element
     </button>
   </>
  )
}

export default Swap