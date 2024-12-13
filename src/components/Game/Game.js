import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessOutput from "../GuessOutput";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guessList, setGuessList] = useState([]);

  const handleNewWord = (guess) => {
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);
  };

  return (
    <>
      {/*<GuessOutput guessList={guessList} />*/}
      <Guess guessList={guessList} />
      <GuessInput handleNewWord={handleNewWord} />
    </>
  );
};

export default Game;
