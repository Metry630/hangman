import { useState } from 'react'
import React from 'react'
import './App.css';
import GetRandomWord from './words.js'
import { Spaces } from './components.js'
import { MistakeCountDisplay } from './components.js';

let currentWord = GetRandomWord();
let splitCurrentWord= currentWord.split('')
const firstHalfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const secondHalfLetters = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function App() {
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [numMistakes, setNumMistakes] = useState(0);
  
  const handleClick = (letter) => {
    if(revealedLetters.includes(letter) === false){
      setRevealedLetters([...revealedLetters, letter])
      if(splitCurrentWord.includes(letter) === false){
      setNumMistakes(n => n+1);
      }
    }
  }
  function reload(){
    window.location.reload(false);
  }
  return(
    <div id ="hangman">
    <div id="upper">
      <div>
        <button onClick = {reload} id = "reload">New game</button>
        <div id = "spacesContainer">
          <Spaces 
          revealedLetters = {revealedLetters} 
          splitCurrentWord = {splitCurrentWord}
          />
        </div>
      </div>
      <MistakeCountDisplay
      numMistakes = {numMistakes} 
      splitCurrentWord = {splitCurrentWord}
      revealedLetters = {revealedLetters}
      />
    </div>
    <div id = "lower">
      <div id = "buttons1">
      {firstHalfLetters.map((letter) => <button onClick={() => handleClick(letter)} 
      className = {!revealedLetters.includes(letter) ? "regular letter" : 
      revealedLetters.includes(letter) && splitCurrentWord.includes(letter) ? "correct letter" : 
      "incorrect letter"}>{letter}</button>)}
      </div>
      <div id = "buttons2">
      {secondHalfLetters.map((letter) => <button onClick={() => handleClick(letter)} 
      className = {!revealedLetters.includes(letter) ? "regular letter" : 
      revealedLetters.includes(letter) && splitCurrentWord.includes(letter) ? "correct letter" : 
      "incorrect letter"}>{letter}</button>)}
      </div>
    </div>
    </div>
  )
}
export default App