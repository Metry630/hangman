import styled from "styled-components";
const SpacesDisplay = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  font-size: 30px;
`;
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
