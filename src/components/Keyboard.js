import React, { useCallback, useContext } from 'react'
import { Key } from '../Key'
import '../App.css'
import { AppContext } from '../App'
export const Keyboard = () => {
  const { onEnter, onDelete, onSelectLetter, disabledLetters, correctLetters, almostLetters } = useContext(AppContext);
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Bkspc'];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      row1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
      row2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
      row3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
    }
  })

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard])
  return (
    <div className='keyboard' >
      <div className="keyrow">
        {row1.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
              almost={almostLetters.includes(key)}
            />
          )
        })}
      </div>
      <div className="keyrow">
        {row2.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
              almost={almostLetters.includes(key)}
            />
          )
        })}
      </div>
      <div className="keyrow">
        {row3.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
              almost={almostLetters.includes(key)}
            />
          )
        })}
      </div>

    </div>
  )
}
