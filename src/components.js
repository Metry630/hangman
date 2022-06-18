import { useState } from 'react';
import hangman1 from "./img/hangman1.jpeg";
import hangman2 from "./img/hangman2.jpeg";
import hangman3 from "./img/hangman3.jpeg";
import hangman4 from "./img/hangman4.jpeg";
import hangman5 from "./img/hangman5.jpeg";
import hangman6 from "./img/hangman6.jpeg";
import hangman7 from "./img/hangman7.jpeg";
import hangman8 from "./img/hangman8.jpeg";
import hangman9 from "./img/hangman9.jpeg";
import hangman10 from "./img/hangman10.jpeg";
import win from "./img/win.jpeg";
export function Spaces({ splitCurrentWord, revealedLetters }) {
  return (
    <ul id="spaces">
      {splitCurrentWord.map(function (letter, idx) {
        const letterDisplay = revealedLetters.includes(letter) ? letter : "_";
        return <li key={idx}>{letterDisplay}</li>;
      })}
    </ul>
  );
}

export function MistakeCountDisplay({
  revealedLetters,
  splitCurrentWord,
  numMistakes,
}) {
  if (
    splitCurrentWord.every((element) => {
      return revealedLetters.includes(element);
    })
  ) {
    return (
      <div id="mistakes">
        <img src={win}></img>
        <h3>You Win!</h3>
      </div>
    );
  } else if (numMistakes < 9) {
    return (
      <div id="mistakes">
        <img
          src={
            numMistakes === 0
              ? hangman1
              : numMistakes === 1
              ? hangman2
              : numMistakes === 2
              ? hangman3
              : numMistakes === 3
              ? hangman4
              : numMistakes === 4
              ? hangman5
              : numMistakes === 5
              ? hangman6
              : numMistakes === 6
              ? hangman7
              : numMistakes === 7
              ? hangman8
              : hangman9
          }
        ></img>
        <h3>Mistakes left: {9 - numMistakes}</h3>
      </div>
    );
  } else if (numMistakes >= 9) {
    return (
      <div id="mistakes">
        <img src={hangman10}></img>
        <h3>You lose! The word was {splitCurrentWord.join("")}</h3>
      </div>
    );
  }
}

export function Settings(){
  const [allowedWordLengths, setAllowedWordLengths] = useState([6, 7, 8, 9, 10])
  console.log(allowedWordLengths)

  function handleOnChange(number){
    let nextWordLengths = allowedWordLengths.map(wordLength => {
      if(wordLength !== number){
        return wordLength
      }else{
        return 69
      }
    })
    allowedWordLengths.includes(number) ? setAllowedWordLengths(
      nextWordLengths.filter(number => number!= 69)
    ) : setAllowedWordLengths(
        [...allowedWordLengths, number]
      )
  }
  console.log(allowedWordLengths)
  return(
    <>
      <label for="six">
        6
        <input
          type="checkbox"
          name="six"
          onChange={() => handleOnChange(6)}
        />
      </label>
      <label for="seven">
        7
        <input
          type="checkbox"
          name="seven"
          onChange={() => handleOnChange(7)}
        />
      </label>
      <label for="eight">
        8
        <input
          type="checkbox"
          name="eight"
          onChange={() => handleOnChange(8)}
        />
      </label>
      <label for="nine">
        9
        <input
          type="checkbox"
          name="nine"
          onChange={() => handleOnChange(9)}
        />
      </label>
      <label for="ten">
        10
        <input
          type="checkbox"
          name="ten"
          onChange={() => handleOnChange(10)}
        />
      </label>
    </>
  )
}
/*
<input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
*/