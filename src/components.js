import hangman1 from './img/hangman1.jpeg'
import hangman2 from './img/hangman2.jpeg'
import hangman3 from './img/hangman3.jpeg'
import hangman4 from './img/hangman4.jpeg'
import hangman5 from './img/hangman5.jpeg'
import hangman6 from './img/hangman6.jpeg'
import hangman7 from './img/hangman7.jpeg'
import hangman8 from './img/hangman8.jpeg'
import hangman9 from './img/hangman9.jpeg'
import hangman10 from './img/hangman10.jpeg'
import win from './img/win.jpeg'
export function Spaces({ splitCurrentWord, revealedLetters }){
  let i = 0;
  let arr = splitCurrentWord.map(function(letter){
    if(revealedLetters.includes(letter)){
      return <li className='space' key = {i++}>{letter}</li>
    }else{
      return <li className='space' key = {i++}>_</li>
    }
  })
  return(
    <ul id = "spaces">
      {arr}
    </ul>
  )
}
export function MistakeCountDisplay({ revealedLetters, splitCurrentWord, numMistakes }){
    if(splitCurrentWord.every(element => {
      return revealedLetters.includes(element);
    })){
      return(
        <div id = "mistakes">
          <img src={win}></img>
          <h3>You Win!</h3>
        </div>
      )
    }else if(numMistakes < 9){
      return(
        <div id = "mistakes">
          <img src={
            numMistakes === 0 ? hangman1 :
            numMistakes === 1 ? hangman2 :
            numMistakes === 2 ? hangman3 :
            numMistakes === 3 ? hangman4 :
            numMistakes === 4 ? hangman5 :
            numMistakes === 5 ? hangman6 : 
            numMistakes === 6 ? hangman7 :
            numMistakes === 7 ? hangman8 : hangman9
            }></img>
          <h3>Mistakes left: {9 - numMistakes}</h3>
        </div>
      )
    }else if(numMistakes >= 9){
      return(
        <div id = "mistakes">
          <img src={hangman10}></img>
          <h3>You lose! The word was {splitCurrentWord.join('')}</h3>
        </div>
      )
    }
  }