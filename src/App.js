import { useState } from 'react'
import './App.css';
import RandomWord from './words.js'
import hangman1 from './img/hangman1.jpeg'
import hangman2 from './img/hangman2.jpeg'
import hangman3 from './img/hangman3.jpeg'
import hangman4 from './img/hangman4.jpeg'
import hangman5 from './img/hangman5.jpeg'
import hangman6 from './img/hangman6.jpeg'
import hangman7 from './img/hangman7.jpeg'
export default App
const letters = [{letter: 'a', id: 1}, {letter: 'b', id: 2}, {letter: 'c', id: 3}, {letter: 'd', id: 4}, {letter: 'e', id: 5}, {letter: 'f', id: 6}, {letter: 'g', id: 7}, {letter: 'h', id: 8}, {letter: 'i', id: 9}, {letter: 'j', id: 10}, {letter: 'k', id: 11}, {letter: 'l', id: 12}, {letter: 'm', id: 13}, {letter: 'n', id: 14}, {letter: 'o', id: 15}, {letter: 'p', id: 16}, {letter: 'q', id: 17}, {letter: 'r', id: 18}, {letter: 's', id: 19}, {letter: 't', id: 20}, {letter: 'u', id: 21}, {letter: 'v', id: 22}, {letter: 'w', id: 23}, {letter: 'x', id: 24}, {letter: 'y', id: 25}, {letter: 'z', id: 26}]
let currentWord = RandomWord();
let splitCurrentWord = currentWord.split('')

function App() {
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [numMistakes, setNumMistakes] = useState(0);
  function Mistakes(){
    if(numMistakes === 0){
      return(
        <div>
          <img src='hangman1'></img>
          <h3>Mistakes left: 6</h3>
        </div>
      )
    }else if(numMistakes === 1){
      return(
        <div>
          <img src='hangman2'></img>
          <h3>Mistakes left: 5</h3>
        </div>
      )
    }else if(numMistakes === 2){
      return(
        <div>
          <img src='hangman3'></img>
          <h3>Mistakes left: 4</h3>
        </div>
      )
    }else if(numMistakes === 3){
      return(
        <div>
          <img src='hangman4'></img>
          <h3>Mistakes left: 3</h3>
        </div>
      )
    }else if(numMistakes === 4){
      return(
        <div>
          <img src='hangman5'></img>
          <h3>Mistakes left: 2</h3>
        </div>
      )
    }else if(numMistakes === 5){
      return(
        <div>
          <img src='hangman6'></img>
          <h3>Mistakes left: 1</h3>
        </div>
      )
    }else if(numMistakes === 6){
      return(
        <div>
          <img src='hangman7'></img>
          <h3>You Lose!</h3>
        </div>
      )
    }
  }
  
  function LetterButtons(){
    
  }
  /*
  function Spaces(){

  }
  */

  return(
    
  )
}
