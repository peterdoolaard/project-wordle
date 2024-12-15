import React, { useState } from "react";

const GuessInput = ({ handleNewWord, isGameOver, isWinner }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 0) {
      return;
    }
    handleNewWord(guess);
    setGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        autoFocus
        autoComplete="off"
        disabled={isGameOver || isWinner}
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5,5}"
        title="Enter 5 characters"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
      {/*<p>A valid input consists of 5 characters.</p>*/}
    </form>
  );
};

export default GuessInput;
