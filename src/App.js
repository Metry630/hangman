import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import getRandomWord from "./words.js";
import { Spaces } from "./components.js";
import { MistakeCountDisplay } from "./components.js";
const firstHalfLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];
const secondHalfLetters = [
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function Game({ allowedWordLengths }) {
  const [currentWord, setCurrentWord] = useState(getRandomWord(allowedWordLengths))
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [numMistakes, setNumMistakes] = useState(0);
  let splitCurrentWord = currentWord.split("");

  const handleClick = (letter) => {
    if (revealedLetters.includes(letter) === false) {
      setRevealedLetters([...revealedLetters, letter]);
      if (splitCurrentWord.includes(letter) === false) {
        setNumMistakes((n) => n + 1);
      }
    }
  };
  function reload() {
    setNumMistakes(0);
    setRevealedLetters([]);
    setCurrentWord(getRandomWord(allowedWordLengths))
  }
  return (
    <div id="hangman">
      <div id="upper">
        <div>
          <button onClick={reload}>New Game</button>
          <div id="spacesContainer">
            <Spaces
              revealedLetters={revealedLetters}
              splitCurrentWord={splitCurrentWord}
            />
          </div>
        </div>
        <MistakeCountDisplay
          numMistakes={numMistakes}
          splitCurrentWord={splitCurrentWord}
          revealedLetters={revealedLetters}
        />
      </div>
      <div id="lower">
        <div id="buttons1">
          {firstHalfLetters.map((letter, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(letter)}
              className={
                !revealedLetters.includes(letter)
                  ? "regular letter"
                  : revealedLetters.includes(letter) &&
                    splitCurrentWord.includes(letter)
                  ? "correct letter"
                  : "incorrect letter"
              }
            >
              {letter}
            </button>
          ))}
        </div>
        <div id="buttons2">
          {secondHalfLetters.map((letter, idx) => (
            <button
              key = {idx}
              onClick={() => handleClick(letter)}
              className={
                !revealedLetters.includes(letter)
                  ? "regular letter"
                  : revealedLetters.includes(letter) &&
                    splitCurrentWord.includes(letter)
                  ? "correct letter"
                  : "incorrect letter"
              }
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App(){
  const [allowedWordLengths, setAllowedWordLengths] = useState([6, 7, 8, 9, 10])
  function Settings(){
    function handleOnChange(number){
      allowedWordLengths.includes(number) ? setAllowedWordLengths(
        allowedWordLengths.filter(current => current != number)
      ) : setAllowedWordLengths(
          [...allowedWordLengths, number]
        )
    }
    return(
      <div className = "disallowedLengths">
        Allowed word lengths:
        <div className='checkboxes'>
        {[6, 7, 8, 9, 10].map((number) => (
          <label>
          {number}
          <input
            type="checkbox"
            name={number}
            checked = {allowedWordLengths.includes(number) ? "checked" : ""}
            onChange={() => handleOnChange(number)}
          />
        </label>
        ))}
        </div>
      </div>
    )
  }
  return(
    <>
      <Router>
        <nav>
          <Link to = "/settings">Settings</Link>
          <Link to = "/game">Game</Link>
        </nav>

        <Routes>
          <Route exact path = "/settings" element = {<Settings />}></Route>
          <Route exact path = "/game" element = {<Game allowedWordLengths={allowedWordLengths}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
