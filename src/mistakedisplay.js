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
import pizzawin from "./img/pizzawin.jpeg"
const Mistakes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
`
const Image = styled.img`
  width: 250px;
  height: auto;
`
export function MistakeCountDisplay({
  revealedLetters,
  splitCurrentWord,
  numMistakes,
  currentTheme
}) {
  if(currentTheme == 'hangman'){
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
        // too many ternary layer here, gimana kalo bikin helper function kayak getImageSrc(currentTheme, numMistakes) gitu
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
            {/* instead bikin separate if karena beda teksnya, bisa di if disini. */}
            {/* kek {numMistakes < 9 ? <h3>Mistakes left....</h3> : <h3>You lose......</h3>} */}
            {/* References https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator and https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator */}
            {/* Atau bisa bikin helper function juga getMistakeDisplayText(currentTheme, numMistakes) gitu */}
            <h3>Mistakes left: {9 - numMistakes}</h3>
          </Mistakes>
        );
      } else if (numMistakes >= 9) {
        return (
          // id nya buat apa ya
          <div id="mistakes">
            <Image src={hangman10}></Image>
            <h3>You lose! The word was {splitCurrentWord.join("")}.</h3>
          </div>
        );
      }
  }else if(currentTheme == 'pizza'){
    if (
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
      } else if (numMistakes < 6) {
        return (
          <Mistakes>
            <Image
              src={
                numMistakes === 0
                  ? pizza1
                  : numMistakes === 1
                  ? pizza2
                  : numMistakes === 2
                  ? pizza3
                  : numMistakes === 3
                  ? pizza4
                  : numMistakes === 4
                  ? pizza5
                  : pizza6
              }
            ></Image>
            <h3>Mistakes left: {6 - numMistakes}</h3>
          </Mistakes>
        );
      } else if (numMistakes >= 6) {
        return (
          <div id="mistakes">
            <Image src={pizza7}></Image>
            <h3>You lose! The word was {splitCurrentWord.join("")}.</h3>
          </div>
        );
      }
  }
}