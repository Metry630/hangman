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
const hangmanImages = [
  hangman1,
  hangman2,
  hangman3,
  hangman4,
  hangman5,
  hangman6,
  hangman7,
  hangman8,
  hangman9,
  hangman10,
];
const pizzaImages = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7];
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
  setGameFinished,
}) {
  if (
    splitCurrentWord.every((element) => {
      return revealedLetters.includes(element);
    }) ||
    numMistakes === 9
  ) {
    setGameFinished(true);
  }
  if (
    currentTheme === "hangman" &&
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
  } else if (
    currentTheme === "pizza" &&
    splitCurrentWord.every((element) => {
      return revealedLetters.includes(element);
    })
  ) {
    return (
      <Mistakes>
        <Image src={pizzawin}></Image>
        <h3>You Win!</h3>
      </Mistakes>
    );
  } else {
    return (
      <Mistakes>
        <Image src={getImageSrc(currentTheme, numMistakes)}></Image>
        <h3>{getCaption(currentTheme, numMistakes, splitCurrentWord)}</h3>
      </Mistakes>
    );
  }
}
function getImageSrc(currentTheme, numMistakes) {
  switch (currentTheme) {
    case "hangman":
      return hangmanImages[numMistakes];
    case "pizza":
      return pizzaImages[numMistakes];
  }
}
function getCaption(currentTheme, numMistakes, splitCurrentWord) {
  let hangmanMistakesLeft = 9 - numMistakes;
  let pizzaMistakesLeft = 6 - numMistakes;
  switch (currentTheme) {
    case "hangman":
      switch (numMistakes) {
        case 9:
          return "You lose! The word was " + splitCurrentWord.join("");
        default:
          return "Mistakes left: " + hangmanMistakesLeft;
      }
    case "pizza":
      switch (numMistakes) {
        case 6:
          return "You lose! The word was " + splitCurrentWord.join("");
        default:
          return "Mistakes left: " + pizzaMistakesLeft;
      }
  }
}
