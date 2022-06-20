import styled from "styled-components";
const Checkbox = styled.input`
  margin: 5px;
`;
export function Settings({
  allowedWordLengths,
  setAllowedWordLengths,
  currentTheme,
  setCurrentTheme,
}) {
  const handleOnChange = (number) => {
    allowedWordLengths.includes(number)
      ? setAllowedWordLengths(
          allowedWordLengths.filter((current) => current !== number)
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
