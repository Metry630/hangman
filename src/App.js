import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import getRandomWord from "./words.js";
import { Spaces } from "./wordspaces.js";
import { MistakeCountDisplay } from "./mistakedisplay.js";
import styled from "styled-components";
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
const Hangman = styled.div`
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-width: 20px;
  border-radius: 10px;
  width: 700px;
  height: 450px;
  align-content: center;
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Lower = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const SpacesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Buttons1 = styled.div`
  display: flex;
  gap: 5px;
`;
const Buttons2 = styled.div`
  display: flex;
  gap: 5px;
`;
const Reload = styled.button`
  margin: 10px;
  font-size: 25px;
  background-color: "#eeeee4z";
`;
const LetterInput = styled.button`
  font-size: 25px;
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    !props.revealedLetters.includes(props.letter)
      ? "#eeeee4"
      : props.revealedLetters.includes(props.letter) &&
        props.splitCurrentWord.includes(props.letter)
      ? "#a5f0a7"
      : "#db5351"};
`;
const linkStyle = {
  textDecoration: "none",
  color: "black",
  margin: "5px",
};
const Checkbox = styled.input`
  margin: 5px;
`;
function Game({ allowedWordLengths, currentTheme }) {
  const [currentWord, setCurrentWord] = useState(
    getRandomWord(allowedWordLengths)
  );
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
    setCurrentWord(getRandomWord(allowedWordLengths));
  }
  return (
    <Hangman>
      <Upper>
        <div>
          <Reload onClick={reload}>New Game</Reload>
          <SpacesContainer>
            <Spaces
              revealedLetters={revealedLetters}
              splitCurrentWord={splitCurrentWord}
            />
          </SpacesContainer>
        </div>
        <MistakeCountDisplay
          numMistakes={numMistakes}
          splitCurrentWord={splitCurrentWord}
          revealedLetters={revealedLetters}
          currentTheme={currentTheme}
        />
      </Upper>
      <Lower>
        <Buttons1>
          {firstHalfLetters.map((letter, idx) => (
            <LetterInput
              key={idx}
              onClick={() => handleClick(letter)}
              revealedLetters={revealedLetters}
              splitCurrentWord={splitCurrentWord}
              letter={letter}
            >
              {letter}
            </LetterInput>
          ))}
        </Buttons1>
        <Buttons2>
          {secondHalfLetters.map((letter, idx) => (
            <LetterInput
              key={idx}
              onClick={() => handleClick(letter)}
              revealedLetters={revealedLetters}
              splitCurrentWord={splitCurrentWord}
              letter={letter}
            >
              {letter}
            </LetterInput>
          ))}
        </Buttons2>
      </Lower>
    </Hangman>
  );
}

function App() {
  const [allowedWordLengths, setAllowedWordLengths] = useState([
    6, 7, 8, 9, 10,
  ]);
  const [currentTheme, setCurrentTheme] = useState("hangman");
  function Settings() {
    const handleOnChange = (number) => {
      allowedWordLengths.includes(number)
        ? setAllowedWordLengths(
            allowedWordLengths.filter((current) => current != number)
          )
        : setAllowedWordLengths([...allowedWordLengths, number]);
    };
    const handleThemeChange = (event) => {
      setCurrentTheme(event.target.value);
    };
    return (
      <div>
        Allowed word lengths:
        <div className="checkboxes">
          {[6, 7, 8, 9, 10].map((number) => (
            <label>
              {number}
              <Checkbox
                type="checkbox"
                name={number}
                checked={allowedWordLengths.includes(number) ? "checked" : ""}
                onChange={() => handleOnChange(number)}
              />
            </label>
          ))}
        </div>
        Theme:
        <div className="radios">
          <label>
            <input
              type="radio"
              value="hangman"
              name="theme"
              checked={currentTheme === "hangman" ? "checked" : ""}
              onChange={handleThemeChange}
            />
            Hangman(9 lives)
          </label>
          <label>
            <input
              type="radio"
              value="pizza"
              name="theme"
              checked={currentTheme === "pizza" ? "checked" : ""}
              onChange={handleThemeChange}
            />
            Pizza(6 lives)
          </label>
        </div>
      </div>
    );
  }
  return (
    <>
      <Router>
        <nav>
          <Link to="/settings" style={linkStyle}>
            Settings
          </Link>
          <Link to="/game" style={linkStyle}>
            Game
          </Link>
        </nav>

        <Routes>
          <Route exact path="/settings" element={<Settings />}></Route>
          <Route
            exact
            path="/game"
            element={
              <Game
                allowedWordLengths={allowedWordLengths}
                currentTheme={currentTheme}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
