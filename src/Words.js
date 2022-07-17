import wordBank from './wordle-bank.txt';

export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

export const generateWordSet = async () => {
    let wordSet;
    let corrWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((res)=>{
            const wordArray=res.split("\n");
            corrWord=wordArray[Math.floor(Math.random()*wordArray.length)].toUpperCase();
            wordSet= new Set(wordArray);
            console.log(wordSet);
        });
    return {wordSet,corrWord};
}