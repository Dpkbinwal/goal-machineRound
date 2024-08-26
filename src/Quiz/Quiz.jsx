import React, { useState } from 'react'
import style from './quiz.module.css'
import Question from './question/Question';

const questions = [{
    "question": "What is the capital of France?",
    "answer": [
        {"text": "Paris", "isCorrect": true},
        {"text": "Berlin", "isCorrect": false},
        {"text": "Madrid", "isCorrect": false},
        {"text": "Rome", "isCorrect": false}
    ]
},
{
    "question": "What is the capital of Italy?",
    "answer": [
        {"text": "Milan", "isCorrect": false},
        {"text": "Venice", "isCorrect": false},
        {"text": "Rome", "isCorrect": true},
        {"text": "Florence", "isCorrect": false}
    ]
},
{
    "question": "What is the capital of Germany?",
    "answer": [
        {"text": "Berlin", "isCorrect": true},
        {"text": "Hamburg", "isCorrect": false},
        {"text": "Munich", "isCorrect": false},
        {"text": "Frankfurt", "isCorrect": false}
    ]
},
{
    "question": "What is the capital of Spain?",
    "answer": [
        {"text": "Barcelona", "isCorrect": false},
        {"text": "Madrid", "isCorrect": true},
        {"text": "Seville", "isCorrect": false},
        {"text": "Valencia", "isCorrect": false}
    ]
}];

const Quiz = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [answer,setAnswer] = useState([]);

    const onAnswerClick = (isCorrect) => {
        setAnswer([...answer, isCorrect]);
        setCurrentQuestion(currentQuestion+1);
    }
    function answer1(){
        let ans=0;
        for(let i=0;i< answer.length;i++){
            if(answer[i]){
                ans++;
            }
        } 
        return ans;
    }
    const correctAnswers = answer1();
    const resetButton =()=> {
        setCurrentQuestion(0)
        setAnswer([])
    }
    
  return (
    <div>
        <h1>Question & Answer </h1>
       {
        currentQuestion<questions.length ? <Question question={questions[currentQuestion]} onAnswerClick={onAnswerClick} /> :<>
        <div>End</div>
        <div>{` ${correctAnswers} Correct answer out of ${questions.length} `}</div>
         <button onClick = {resetButton}>Reset </button> </>
       }

    </div>

  )
}

export default Quiz