import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessOutput from "../GuessOutput";
import Guess from "../Guess";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

const Game = () => {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guessList, setGuessList] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [guesses, setGuesses] = useState(0);

  const handleNewWord = (guess) => {
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);
    if (guess === answer) {
      setIsWinner(true);
    }
    setIsGameOver(newGuessList.length === NUM_OF_GUESSES_ALLOWED);
    setGuesses(newGuessList.length);
  };

  const newGame = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setIsWinner(false);
    setIsGameOver(false);
    setGuesses(0);
  };

  console.info({ answer });

  return (
    <>
      {/*<GuessOutput guessList={guessList} />*/}
      <Guess guessList={guessList} answer={answer} />
      <GuessInput
        handleNewWord={handleNewWord}
        isGameOver={isGameOver}
        isWinner={isWinner}
      />
      <Keyboard guessList={guessList} answer={answer} />
      <Banner
        isWinner={isWinner}
        isGameOver={isGameOver}
        guesses={guesses}
        newGame={newGame}
      />
    </>
  );
};

export default Game;
