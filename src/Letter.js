import React,{useContext} from 'react'
import {AppContext} from './App.js'

export const Letter = ({ letterPos, attempValue }) => {
  const {board,correctWord,currAttempt,setDisabledLetters,setAlmostLetters,setCorrectLetters}=useContext(AppContext);
  const letter = board[attempValue][letterPos];
  const correct=correctWord[letterPos]===letter;
  const almost=!correct && letter!=='' && correctWord.includes(letter);
  const letterState= currAttempt.attempt>attempValue && (correct? "correct" : almost ? "almost" : "error"); 
  React.useEffect(()=>{
    if(letter!=="" && !correct && !almost){
      setDisabledLetters((prev)=>([...prev,letter]));
    }
    else if(letter!=="" && correct){
      setCorrectLetters((prev)=>([...prev,letter]));
    }
    else if(letter!=="" && almost){
      setAlmostLetters((prev)=>([...prev,letter]));
    }
  },[currAttempt.attempt])
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}
