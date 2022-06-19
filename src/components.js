import styled from "styled-components";
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
const Mistakes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
`
const SpacesDisplay = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  font-size: 30px;
`
const Image = styled.img`
  width: 250px;
  height: auto;
`
export function Spaces({ splitCurrentWord, revealedLetters }) {
  return (
    <SpacesDisplay>
      {splitCurrentWord.map(function (letter, idx) {
        const letterDisplay = revealedLetters.includes(letter) ? letter : "_";
        return <li key={idx}>{letterDisplay}</li>;
      })}
    </SpacesDisplay>
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
      <Mistakes>
        <Image src={win}></Image>
        <h3>You Win!</h3>
      </Mistakes>
    );
  } else if (numMistakes < 9) {
    return (
      <Mistakes>
        <Image
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
        ></Image>
        <h3>Mistakes left: {9 - numMistakes}</h3>
      </Mistakes>
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



