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
const letters = [
  {letter: 'A', id: 1}, 
  {letter: 'B', id: 2}, 
  {letter: 'C', id: 3}, 
  {letter: 'D', id: 4}, 
  {letter: 'E', id: 5}, 
  {letter: 'F', id: 6}, 
  {letter: 'G', id: 7}, 
  {letter: 'H', id: 8}, 
  {letter: 'I', id: 9}, 
  {letter: 'J', id: 10}, 
  {letter: 'K', id: 11}, 
  {letter: 'L', id: 12}, 
  {letter: 'M', id: 13}, 
  {letter: 'N', id: 14}, 
  {letter: 'O', id: 15}, 
  {letter: 'P', id: 16}, 
  {letter: 'Q', id: 17}, 
  {letter: 'R', id: 18}, 
  {letter: 'S', id: 19}, 
  {letter: 'T', id: 20}, 
  {letter: 'U', id: 21}, 
  {letter: 'V', id: 22}, 
  {letter: 'W', id: 23}, 
  {letter: 'X', id: 24}, 
  {letter: 'Y', id: 25}, 
  {letter: 'Z', id: 26}
];
let currentWord = RandomWord();
let splitCurrentWord = currentWord.split('')

function App() {
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [numMistakes, setNumMistakes] = useState(0);
  function Mistakes(){
    if(numMistakes === 0){
      return(
        <div id = "mistakes">
          <img src={hangman1}></img>
          <h3>Mistakes left: 6</h3>
        </div>
      )
    }else if(numMistakes === 1){
      return(
        <div id = "mistakes">
          <img src={hangman2}></img>
          <h3>Mistakes left: 5</h3>
        </div>
      )
    }else if(numMistakes === 2){
      return(
        <div id = "mistakes">
          <img src={hangman3}></img>
          <h3>Mistakes left: 4</h3>
        </div>
      )
    }else if(numMistakes === 3){
      return(
        <div id = "mistakes">
          <img src={hangman4}></img>
          <h3>Mistakes left: 3</h3>
        </div>
      )
    }else if(numMistakes === 4){
      return(
        <div id = "mistakes">
          <img src={hangman5}></img>
          <h3>Mistakes left: 2</h3>
        </div>
      )
    }else if(numMistakes === 5){
      return(
        <div id = "mistakes">
          <img src={hangman6}></img>
          <h3>Mistakes left: 1</h3>
        </div>
      )
    }else if(numMistakes === 6){
      return(
        <div id = "mistakes">
          <img src={hangman7}></img>
          <h3>You Lose!</h3>
        </div>
      )
    }
  }
  
  function handleClick(letter){
  }

  function Spaces(){

  }

  return(
    <>
    <div id="upper">
      <Spaces />
      <Mistakes />
    </div>
    <div id = "lower">
      <div id = "buttons1">
        <button onClick = {handleClick(this.textcontent)}>A</button>
        <button onClick = {handleClick(this.textcontent)}>B</button>
        <button onClick = {handleClick(this.textcontent)}>C</button>
        <button onClick = {handleClick(this.textcontent)}>D</button>
        <button onClick = {handleClick(this.textcontent)}>E</button>
        <button onClick = {handleClick(this.textcontent)}>F</button>
        <button onClick = {handleClick(this.textcontent)}>G</button>
        <button onClick = {handleClick(this.textcontent)}>H</button>
        <button onClick = {handleClick(this.textcontent)}>I</button>
        <button onClick = {handleClick(this.textcontent)}>J</button>
        <button onClick = {handleClick(this.textcontent)}>K</button>
        <button onClick = {handleClick(this.textcontent)}>L</button>
        <button onClick = {handleClick(this.textcontent)}>M</button>
      </div>
      <div id = "buttons2">
        <button onClick = {handleClick(this.textcontent)}>N</button>
        <button onClick = {handleClick(this.textcontent)}>O</button>
        <button onClick = {handleClick(this.textcontent)}>P</button>
        <button onClick = {handleClick(this.textcontent)}>Q</button>
        <button onClick = {handleClick(this.textcontent)}>R</button>
        <button onClick = {handleClick(this.textcontent)}>S</button>
        <button onClick = {handleClick(this.textcontent)}>T</button>
        <button onClick = {handleClick(this.textcontent)}>U</button>
        <button onClick = {handleClick(this.textcontent)}>V</button>
        <button onClick = {handleClick(this.textcontent)}>W</button>
        <button onClick = {handleClick(this.textcontent)}>X</button>
        <button onClick = {handleClick(this.textcontent)}>Y</button>
        <button onClick = {handleClick(this.textcontent)}>Z</button>
      </div>
    </div>
    </>
  )
}
