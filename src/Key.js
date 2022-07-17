import React, { useContext } from 'react'
import { AppContext } from './App'
import './App.css'


export const Key = ({ keyVal,disabled,correct,almost}) => {
  const {   onSelectLetter, onDelete, onEnter} = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === 'Enter') {
      onEnter();
    } else if (keyVal === 'Bkspc') {
      onDelete();
    } else {
     onSelectLetter(keyVal);
    }
  }
  return (
    <div className='key' onClick={selectLetter} id={correct?"correct":(almost?"almost":(disabled&&"error"))}> 
      <p>{keyVal}</p>
    </div>
  )
}
