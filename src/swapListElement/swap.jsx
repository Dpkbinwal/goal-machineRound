import React from 'react'

const Swap = () => {

    const list1=[{title:'list 1',checked:false},
        {title:'list 2',checked:false},
        {title:'list 3',checked:false}
    ]

    const list2=[{title:'list a',checked:false},
        {title:'list b',checked:false},
        {title:'list c',checked:false}
    ]


    const handleCheck =(ind)=>{
        const updated= {...list1};
        // updated[ind].checked=!updated[ind].checked;
        console.log(updated);
        console.log(ind);
        
    }

  return (
   <>
   <h1>Swap the Checked Item btw two list </h1>
   <br/>
   
   <ol>
    {
        list1.map((el,ind)=>{
            return <>
            <li key={ind}>
                <input type="checkbox" value={el.checked} onClick={(ind)=>handleCheck(ind)}/>
                {el.title}</li>
            </>
        })
    }
    
   </ol> 

   <ul>
   {
        list2.map((el,ind)=>{
            return <>
            <li>{el.title}</li>
            </>
        })
    }
   </ul> 
     
   </>
  )
}

export default Swap