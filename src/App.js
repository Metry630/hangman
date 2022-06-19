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
          {secondHalfLetters.map((letter) => (
            <button
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
        <label for="six">
          6
          <input
            type="checkbox"
            name="six"
            checked = {allowedWordLengths.includes(6) ? "checked" : ""}
            onChange={() => handleOnChange(6)}
          />
        </label>
        <label for="seven">
          7
          <input
            type="checkbox"
            name="seven"
            checked = {allowedWordLengths.includes(7) ? "checked" : ""}
            onChange={() => handleOnChange(7)}
          />
        </label>
        <label for="eight">
          8
          <input
            type="checkbox"
            name="eight"
            checked = {allowedWordLengths.includes(8) ? "checked" : ""}
            onChange={() => handleOnChange(8)}
          />
        </label>
        <label for="nine">
          9
          <input
            type="checkbox"
            name="nine"
            checked = {allowedWordLengths.includes(9) ? "checked" : ""}
            onChange={() => handleOnChange(9)}
          />
        </label>
        <label for="ten">
          10
          <input
            type="checkbox"
            name="ten"
            checked = {allowedWordLengths.includes(10) ? "checked" : ""}
            onChange={() => handleOnChange(10)}
          />
        </label>
        </div>
      </div>
    )
  }
  return(
    <>
      <Router>
        <Link to = "/settings">Settings</Link>
        <Routes>
          <Route exact path = "/settings" element = {<Settings />}></Route>
        </Routes>
      </Router>
      <Game allowedWordLengths={allowedWordLengths} />
    </>
  )
}

export default App;
