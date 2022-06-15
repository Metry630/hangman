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
import { isDisabled } from '@testing-library/user-event/dist/utils';
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
          <h3>You Lose! The word was {currentWord}</h3>
        </div>
      )
    }
  }
console.log(currentWord)
  function Spaces(){
    let i = 0;
    let arr = splitCurrentWord.map(function(letter){
      if(revealedLetters.includes(letter)){
        return <li className='space' key = {i++}>{letter}</li>
      }else{
        return <li className='space' key = {i++}>_</li>
      }
    })
    return(
      <ul id = "spaces">
        {arr}
      </ul>
    )
  }
  
  function handleClick(letter){
    if(revealedLetters.includes(letter) === false){
      setRevealedLetters([...revealedLetters, letter])
      if(splitCurrentWord.includes(letter) === false){
      setNumMistakes(n => n+1)
      }
    }
  }

  return(
    <>
    <div id="upper">
      <Spaces />
      <Mistakes />
    </div>
    <div id = "lower">
      <div id = "buttons1">
        <button onClick = {() => handleClick('A')}>A</button>
        <button onClick = {() => handleClick('B')}>B</button>
        <button onClick = {() => handleClick('C')}>C</button>
        <button onClick = {() => handleClick('D')}>D</button>
        <button onClick = {() => handleClick('E')}>E</button>
        <button onClick = {() => handleClick('F')}>F</button>
        <button onClick = {() => handleClick('G')}>G</button>
        <button onClick = {() => handleClick('H')}>H</button>
        <button onClick = {() => handleClick('I')}>I</button>
        <button onClick = {() => handleClick('J')}>J</button>
        <button onClick = {() => handleClick('K')}>K</button>
        <button onClick = {() => handleClick('L')}>L</button>
        <button onClick = {() => handleClick('M')}>M</button>
      </div>
      <div id = "buttons2">
        <button onClick = {() => handleClick('N')}>N</button>
        <button onClick = {() => handleClick('O')}>O</button>
        <button onClick = {() => handleClick('P')}>P</button>
        <button onClick = {() => handleClick('Q')}>Q</button>
        <button onClick = {() => handleClick('R')}>R</button>
        <button onClick = {() => handleClick('S')}>S</button>
        <button onClick = {() => handleClick('T')}>T</button>
        <button onClick = {() => handleClick('U')}>U</button>
        <button onClick = {() => handleClick('V')}>V</button>
        <button onClick = {() => handleClick('W')}>W</button>
        <button onClick = {() => handleClick('X')}>X</button>
        <button onClick = {() => handleClick('Y')}>Y</button>
        <button onClick = {() => handleClick('Z')}>Z</button>
      </div>
    </div>
    </>
  )
}
