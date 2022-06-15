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
      setNumMistakes(n => n+1);
      }
    }
  }
  console.log(revealedLetters)
  return(
    <div id ="hangman">
    <div id="upper">
      <div id = "spacesContainer">
      <Spaces />
      </div>
      <Mistakes />
    </div>
    <div id = "lower">
      <div id = "buttons1">
        <button onClick = {() => handleClick('A')} 
        className = {!revealedLetters.includes("A") ? "regular" : revealedLetters.includes("A") && splitCurrentWord.includes("A") ? "correct" : "incorrect"}>A</button>
        <button onClick = {() => handleClick('B')}
        className = {!revealedLetters.includes("B") ? "regular" : revealedLetters.includes("B") && splitCurrentWord.includes("B") ? "correct" : "incorrect"}>B</button>
        <button onClick = {() => handleClick('C')}
        className = {!revealedLetters.includes("C") ? "regular" : revealedLetters.includes("C") && splitCurrentWord.includes("C") ? "correct" : "incorrect"}>C</button>
        <button onClick = {() => handleClick('D')}
        className = {!revealedLetters.includes("D") ? "regular" : revealedLetters.includes("D") && splitCurrentWord.includes("D") ? "correct" : "incorrect"}>D</button>
        <button onClick = {() => handleClick('E')}
        className = {!revealedLetters.includes("E") ? "regular" : revealedLetters.includes("E") && splitCurrentWord.includes("E") ? "correct" : "incorrect"}>E</button>
        <button onClick = {() => handleClick('F')}
        className = {!revealedLetters.includes("F") ? "regular" : revealedLetters.includes("F") && splitCurrentWord.includes("F") ? "correct" : "incorrect"}>F</button>
        <button onClick = {() => handleClick('G')}
        className = {!revealedLetters.includes("G") ? "regular" : revealedLetters.includes("G") && splitCurrentWord.includes("G") ? "correct" : "incorrect"}>G</button>
        <button onClick = {() => handleClick('H')}
        className = {!revealedLetters.includes("H") ? "regular" : revealedLetters.includes("H") && splitCurrentWord.includes("H") ? "correct" : "incorrect"}>H</button>
        <button onClick = {() => handleClick('I')}
        className = {!revealedLetters.includes("I") ? "regular" : revealedLetters.includes("I") && splitCurrentWord.includes("I") ? "correct" : "incorrect"}>I</button>
        <button onClick = {() => handleClick('J')}
        className = {!revealedLetters.includes("J") ? "regular" : revealedLetters.includes("J") && splitCurrentWord.includes("J") ? "correct" : "incorrect"}>J</button>
        <button onClick = {() => handleClick('K')}
        className = {!revealedLetters.includes("K") ? "regular" : revealedLetters.includes("K") && splitCurrentWord.includes("K") ? "correct" : "incorrect"}>K</button>
        <button onClick = {() => handleClick('L')}
        className = {!revealedLetters.includes("L") ? "regular" : revealedLetters.includes("L") && splitCurrentWord.includes("L") ? "correct" : "incorrect"}>L</button>
        <button onClick = {() => handleClick('M')}
        className = {!revealedLetters.includes("M") ? "regular" : revealedLetters.includes("M") && splitCurrentWord.includes("M") ? "correct" : "incorrect"}>M</button>
      </div>
      <div id = "buttons2">
        <button onClick = {() => handleClick('N')}
        className = {!revealedLetters.includes("N") ? "regular" : revealedLetters.includes("N") && splitCurrentWord.includes("N") ? "correct" : "incorrect"}>N</button>
        <button onClick = {() => handleClick('O')}
        className = {!revealedLetters.includes("O") ? "regular" : revealedLetters.includes("O") && splitCurrentWord.includes("O") ? "correct" : "incorrect"}>O</button>
        <button onClick = {() => handleClick('P')}
        className = {!revealedLetters.includes("P") ? "regular" : revealedLetters.includes("P") && splitCurrentWord.includes("P") ? "correct" : "incorrect"}>P</button>
        <button onClick = {() => handleClick('Q')}
        className = {!revealedLetters.includes("Q") ? "regular" : revealedLetters.includes("Q") && splitCurrentWord.includes("Q") ? "correct" : "incorrect"}>Q</button>
        <button onClick = {() => handleClick('R')}
        className = {!revealedLetters.includes("R") ? "regular" : revealedLetters.includes("R") && splitCurrentWord.includes("R") ? "correct" : "incorrect"}>R</button>
        <button onClick = {() => handleClick('S')}
        className = {!revealedLetters.includes("S") ? "regular" : revealedLetters.includes("S") && splitCurrentWord.includes("S") ? "correct" : "incorrect"}>S</button>
        <button onClick = {() => handleClick('T')}
        className = {!revealedLetters.includes("T") ? "regular" : revealedLetters.includes("T") && splitCurrentWord.includes("T") ? "correct" : "incorrect"}>T</button>
        <button onClick = {() => handleClick('U')}
        className = {!revealedLetters.includes("U") ? "regular" : revealedLetters.includes("U") && splitCurrentWord.includes("U") ? "correct" : "incorrect"}>U</button>
        <button onClick = {() => handleClick('V')}
        className = {!revealedLetters.includes("V") ? "regular" : revealedLetters.includes("V") && splitCurrentWord.includes("V") ? "correct" : "incorrect"}>V</button>
        <button onClick = {() => handleClick('W')}
        className = {!revealedLetters.includes("W") ? "regular" : revealedLetters.includes("W") && splitCurrentWord.includes("W") ? "correct" : "incorrect"}>W</button>
        <button onClick = {() => handleClick('X')}
        className = {!revealedLetters.includes("X") ? "regular" : revealedLetters.includes("X") && splitCurrentWord.includes("X") ? "correct" : "incorrect"}>X</button>
        <button onClick = {() => handleClick('Y')}
        className = {!revealedLetters.includes("Y") ? "regular" : revealedLetters.includes("Y") && splitCurrentWord.includes("Y") ? "correct" : "incorrect"}>Y</button>
        <button onClick = {() => handleClick('Z')}
        className = {!revealedLetters.includes("Z") ? "regular" : revealedLetters.includes("Z") && splitCurrentWord.includes("Z") ? "correct" : "incorrect"}>Z</button>
      </div>
    </div>
    </div>
  )
}
