import React from 'react'

const Question = ({question, onAnswerClick }) => {
  return (
    <div>
        <h3>{question.question}</h3>
        <ul style={{display:'grid', gridTemplateColumns:"auto auto "}}>
           {
            question.answer.map((val,ind)=>{
                return <div key={val.text}> 
                    <button onClick={()=>{onAnswerClick(val.isCorrect)}}  style={{width:'100%'}}>{val.text}</button>
                </div>
            })
           }
        </ul>
    </div>
  )
}

export default Question