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
import pizza1 from "./img/pizza1.jpeg";
import pizza2 from "./img/pizza2.jpeg";
import pizza3 from "./img/pizza3.jpeg";
import pizza4 from "./img/pizza4.jpeg";
import pizza5 from "./img/pizza5.jpeg";
import pizza6 from "./img/pizza6.jpeg";
import pizza7 from "./img/pizza7.jpeg";
import pizzawin from "./img/pizzawin.jpeg";
const Mistakes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
`;
const Image = styled.img`
  width: 250px;
  height: auto;
`;
export function MistakeCountDisplay({
  revealedLetters,
  splitCurrentWord,
  numMistakes,
  currentTheme,
  setGameFinished
}) {
  if (currentTheme === "hangman") {
    if (
      splitCurrentWord.every((element) => {
        return revealedLetters.includes(element);
      })
    ) {
      setGameFinished(true)
      return (
        <Mistakes>
          <Image src={win}></Image>
          <h3>You Win!</h3>
        </Mistakes>
      );
    } else if (numMistakes < 9) {
      return (
        <Mistakes>
          <Image src={getImageSrc(currentTheme, numMistakes)}></Image>
          <h3>Mistakes left: {9 - numMistakes}</h3>
        </Mistakes>
      );
    } else if (numMistakes >= 9) {
      setGameFinished(true)
      return (
        <div id="mistakes">
          <Image src={getImageSrc(currentTheme, numMistakes)}></Image>
          <h3>You lose! The word was {splitCurrentWord.join("")}.</h3>
        </div>
      );
    }
  } else if ((currentTheme = "pizza")) {
    if (
      splitCurrentWord.every((element) => {
        return revealedLetters.includes(element);
      })
    ) {
      setGameFinished(true)
      return (
        <Mistakes>
          <Image src={pizzawin}></Image>
          <h3>You Win!</h3>
        </Mistakes>
      );
    } else if (numMistakes < 6) {
      return (
        <Mistakes>
          <Image src={getImageSrc(currentTheme, numMistakes)}></Image>
          <h3>Mistakes left: {6 - numMistakes}</h3>
        </Mistakes>
      );
    } else if (numMistakes >= 6) {
      setGameFinished(true)
      return (
        <div id="mistakes">
          <Image src={getImageSrc(currentTheme, numMistakes)}></Image>
          <h3>You lose! The word was {splitCurrentWord.join("")}.</h3>
        </div>
      );
    }
  }
}
function getImageSrc(currentTheme, numMistakes) {
  switch (currentTheme) {
    case "hangman":
      switch (numMistakes) {
        case 0:
          return hangman1;
        case 1:
          return hangman2;
        case 2:
          return hangman3;
        case 3:
          return hangman4;
        case 4:
          return hangman5;
        case 5:
          return hangman6;
        case 6:
          return hangman7;
        case 7:
          return hangman8;
        case 8:
          return hangman9;
        default:
          return hangman10;
      }
    case "pizza":
      switch (numMistakes) {
        case 0:
          return pizza1;
        case 1:
          return pizza2;
        case 2:
          return pizza3;
        case 3:
          return pizza4;
        case 4:
          return pizza5;
        case 5:
          return pizza6;
        default:
          return pizza7;
      }
  }
}