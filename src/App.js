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
import hangman8 from './img/hangman8.jpeg'
import hangman9 from './img/hangman9.jpeg'
import hangman10 from './img/hangman8.jpeg'
import win from './img/win.jpeg'
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
    if(splitCurrentWord.every(element => {
      return revealedLetters.includes(element);
    })){
      return <Win />
    }
    if(numMistakes === 0){
      return(
        <div id = "mistakes">
          <img src={hangman1}></img>
          <h3>Mistakes left: 9</h3>
        </div>
      )
    }else if(numMistakes === 1){
      return(
        <div id = "mistakes">
          <img src={hangman2}></img>
          <h3>Mistakes left: 8</h3>
        </div>
      )
    }else if(numMistakes === 2){
      return(
        <div id = "mistakes">
          <img src={hangman3}></img>
          <h3>Mistakes left: 7</h3>
        </div>
      )
    }else if(numMistakes === 3){
      return(
        <div id = "mistakes">
          <img src={hangman4}></img>
          <h3>Mistakes left: 6</h3>
        </div>
      )
    }else if(numMistakes === 4){
      return(
        <div id = "mistakes">
          <img src={hangman5}></img>
          <h3>Mistakes left: 5</h3>
        </div>
      )
    }else if(numMistakes === 5){
      return(
        <div id = "mistakes">
          <img src={hangman6}></img>
          <h3>Mistakes left: 4</h3>
        </div>
      )
    }else if(numMistakes === 6){
      return(
        <div id = "mistakes">
          <img src={hangman7}></img>
          <h3>Mistakes left: 3</h3>
        </div>
      )
    }else if(numMistakes === 7){
      return(
        <div id = "mistakes">
          <img src={hangman8}></img>
          <h3>Mistakes left: 2</h3>
        </div>
      )
    }else if(numMistakes === 8){
      return(
        <div id = "mistakes">
          <img src={hangman9}></img>
          <h3>Mistakes left: 1</h3>
        </div>
      )
    }else if(numMistakes === 9){
      return(
        <div id = "mistakes">
          <img src={hangman10}></img>
          <h3>You lose! The word was {currentWord}</h3>
        </div>
      )
    }
  }
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
  function Win(){
    return(
      <div id = "mistakes">
        <img src={win}></img>
        <h3>You Win!</h3>
      </div>
    )
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
          <Spaces />
        </div>
      </div>
      <Mistakes />
    </div>
    <div id = "lower">
      <div id = "buttons1">
        <button onClick = {() => handleClick('A')} 
        className = {!revealedLetters.includes("A") ? "regular letter" : revealedLetters.includes("A") && splitCurrentWord.includes("A") ? "correct letter" : "incorrect letter"}>A</button>
        <button onClick = {() => handleClick('B')}
        className = {!revealedLetters.includes("B") ? "regular letter" : revealedLetters.includes("B") && splitCurrentWord.includes("B") ? "correct letter" : "incorrect letter"}>B</button>
        <button onClick = {() => handleClick('C')}
        className = {!revealedLetters.includes("C") ? "regular letter" : revealedLetters.includes("C") && splitCurrentWord.includes("C") ? "correct letter" : "incorrect letter"}>C</button>
        <button onClick = {() => handleClick('D')}
        className = {!revealedLetters.includes("D") ? "regular letter" : revealedLetters.includes("D") && splitCurrentWord.includes("D") ? "correct letter" : "incorrect letter"}>D</button>
        <button onClick = {() => handleClick('E')}
        className = {!revealedLetters.includes("E") ? "regular letter" : revealedLetters.includes("E") && splitCurrentWord.includes("E") ? "correct letter" : "incorrect letter"}>E</button>
        <button onClick = {() => handleClick('F')}
        className = {!revealedLetters.includes("F") ? "regular letter" : revealedLetters.includes("F") && splitCurrentWord.includes("F") ? "correct letter" : "incorrect letter"}>F</button>
        <button onClick = {() => handleClick('G')}
        className = {!revealedLetters.includes("G") ? "regular letter" : revealedLetters.includes("G") && splitCurrentWord.includes("G") ? "correct letter" : "incorrect letter"}>G</button>
        <button onClick = {() => handleClick('H')}
        className = {!revealedLetters.includes("H") ? "regular letter" : revealedLetters.includes("H") && splitCurrentWord.includes("H") ? "correct letter" : "incorrect letter"}>H</button>
        <button onClick = {() => handleClick('I')}
        className = {!revealedLetters.includes("I") ? "regular letter" : revealedLetters.includes("I") && splitCurrentWord.includes("I") ? "correct letter" : "incorrect letter"}>I</button>
        <button onClick = {() => handleClick('J')}
        className = {!revealedLetters.includes("J") ? "regular letter" : revealedLetters.includes("J") && splitCurrentWord.includes("J") ? "correct letter" : "incorrect letter"}>J</button>
        <button onClick = {() => handleClick('K')}
        className = {!revealedLetters.includes("K") ? "regular letter" : revealedLetters.includes("K") && splitCurrentWord.includes("K") ? "correct letter" : "incorrect letter"}>K</button>
        <button onClick = {() => handleClick('L')}
        className = {!revealedLetters.includes("L") ? "regular letter" : revealedLetters.includes("L") && splitCurrentWord.includes("L") ? "correct letter" : "incorrect letter"}>L</button>
        <button onClick = {() => handleClick('M')}
        className = {!revealedLetters.includes("M") ? "regular letter" : revealedLetters.includes("M") && splitCurrentWord.includes("M") ? "correct letter" : "incorrect letter"}>M</button>
      </div>
      <div id = "buttons2">
        <button onClick = {() => handleClick('N')}
        className = {!revealedLetters.includes("N") ? "regular letter" : revealedLetters.includes("N") && splitCurrentWord.includes("N") ? "correct letter" : "incorrect letter"}>N</button>
        <button onClick = {() => handleClick('O')}
        className = {!revealedLetters.includes("O") ? "regular letter" : revealedLetters.includes("O") && splitCurrentWord.includes("O") ? "correct letter" : "incorrect letter"}>O</button>
        <button onClick = {() => handleClick('P')}
        className = {!revealedLetters.includes("P") ? "regular letter" : revealedLetters.includes("P") && splitCurrentWord.includes("P") ? "correct letter" : "incorrect letter"}>P</button>
        <button onClick = {() => handleClick('Q')}
        className = {!revealedLetters.includes("Q") ? "regular letter" : revealedLetters.includes("Q") && splitCurrentWord.includes("Q") ? "correct letter" : "incorrect letter"}>Q</button>
        <button onClick = {() => handleClick('R')}
        className = {!revealedLetters.includes("R") ? "regular letter" : revealedLetters.includes("R") && splitCurrentWord.includes("R") ? "correct letter" : "incorrect letter"}>R</button>
        <button onClick = {() => handleClick('S')}
        className = {!revealedLetters.includes("S") ? "regular letter" : revealedLetters.includes("S") && splitCurrentWord.includes("S") ? "correct letter" : "incorrect letter"}>S</button>
        <button onClick = {() => handleClick('T')}
        className = {!revealedLetters.includes("T") ? "regular letter" : revealedLetters.includes("T") && splitCurrentWord.includes("T") ? "correct letter" : "incorrect letter"}>T</button>
        <button onClick = {() => handleClick('U')}
        className = {!revealedLetters.includes("U") ? "regular letter" : revealedLetters.includes("U") && splitCurrentWord.includes("U") ? "correct letter" : "incorrect letter"}>U</button>
        <button onClick = {() => handleClick('V')}
        className = {!revealedLetters.includes("V") ? "regular letter" : revealedLetters.includes("V") && splitCurrentWord.includes("V") ? "correct letter" : "incorrect letter"}>V</button>
        <button onClick = {() => handleClick('W')}
        className = {!revealedLetters.includes("W") ? "regular letter" : revealedLetters.includes("W") && splitCurrentWord.includes("W") ? "correct letter" : "incorrect letter"}>W</button>
        <button onClick = {() => handleClick('X')}
        className = {!revealedLetters.includes("X") ? "regular letter" : revealedLetters.includes("X") && splitCurrentWord.includes("X") ? "correct letter" : "incorrect letter"}>X</button>
        <button onClick = {() => handleClick('Y')}
        className = {!revealedLetters.includes("Y") ? "regular letter" : revealedLetters.includes("Y") && splitCurrentWord.includes("Y") ? "correct letter" : "incorrect letter"}>Y</button>
        <button onClick = {() => handleClick('Z')}
        className = {!revealedLetters.includes("Z") ? "regular letter" : revealedLetters.includes("Z") && splitCurrentWord.includes("Z") ? "correct letter" : "incorrect letter"}>Z</button>
      </div>
    </div>
    </div>
  )
}
