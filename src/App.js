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
import { Settings } from "./components.js"
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
function Game() {
  const [currentWord, setCurrentWord] = useState(getRandomWord())
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [numMistakes, setNumMistakes] = useState(0);
  const [disallowedWordLength, setDisallowedWordLength] = useState([])
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
    setCurrentWord(getRandomWord())
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
  return(
    <>
      <Router>
        <Link to = "/settings">Settings</Link>
        <Routes>
          <Route exact path = "/settings" element = {<Settings />}></Route>
        </Routes>
      </Router>
      <Game />
    </>
  )
}

export default App;
/*
<Router>
            <Link to="/menu">Menu</Link>
          </Router>
          <Routes>
            <Route path="/menu">
              <Menu 
                allowedWordLength = {allowedWordLength}
                splitCurrentWord = {splitCurrentWord}
                />
            </Route>
          </Routes>
*/