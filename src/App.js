import { useState } from 'react'
import React from 'react'
import './App.css';
import GetRandomWord from './words.js'
import { Spaces } from './components.js'
import { MistakeCountDisplay } from './components.js';

let currentWord = GetRandomWord();
let splitCurrentWord = currentWord.split('')

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
export default App