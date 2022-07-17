import './App.css';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import React, { createContext } from 'react';
import { boardDefault, generateWordSet } from './Words'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();
function App() {
  const [board, setBoard] = React.useState(boardDefault);
  const [currAttempt, setCurrAttempt] = React.useState({ attempt: 0, letterPos: 0 })
  const [wordsSet, setWordSet] = React.useState(new Set());
  const [disabledLetters, setDisabledLetters] = React.useState([]);
  const [correctLetters, setCorrectLetters] = React.useState([]);
  const [almostLetters, setAlmostLetters] = React.useState([]);
  const [correctWord,setCorrectWord] = React.useState("");

  React.useEffect(() => {
    generateWordSet().then(words => {
      setWordSet(words.wordSet);
      setCorrectWord(words.corrWord);
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    console.log(currWord.toLowerCase());

    if (wordsSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
    }
    else {
      notifyNotFound();
      return;
    }
 
    if (currWord === correctWord) {
      notifyWin();
      return;
    }

    if(currAttempt.attempt===5){
      notifyLoss();
      setTimeout(notifyLoss2,300);
      return;
    }
  }

  const notifyWin = () => toast.success("You Won",{
    position:"top-right",
    autoClose:1500,
    hideProgressBar:true
  });
  const notifyLoss = () => toast.error(`You Lost`,{
    position:"top-right",
    autoClose:1500,
    hideProgressBar:true
  });
  const notifyLoss2 = () => toast.error(`correct word:`+ correctWord,{
    position:"top-right",
    autoClose:1500,
    hideProgressBar:true
  });
  const notifyNotFound = () => toast.warn(`Word Not Found`,{
    position:"top-right",
    autoClose:1500,
    hideProgressBar:true
  });
  return (
    <div className="App">
      <header className='header'><h1>Wordle</h1></header>
      <AppContext.Provider value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
        correctWord,
        disabledLetters,
        setDisabledLetters,
        correctLetters,
        setCorrectLetters,
        almostLetters,
        setAlmostLetters,
      }}>
        <Board />
        <Keyboard />
        <ToastContainer />
      </AppContext.Provider>

    </div>
  );
}

export default App;
