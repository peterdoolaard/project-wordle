import React from "react";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guessList, answer }) => {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);
  const cells = range(0, WORD_LENGTH);

  const splitWords = guessList.map((word) => {
    return checkGuess(word, answer);
  });

  return (
    <div className="guess-results">
      {rows.map((row) => (
        <p className="guess" key={row}>
          {cells.map((cell) => (
            <span
              className={`cell  ${
                splitWords[row] && splitWords[row][cell]
                  ? splitWords[row][cell].status
                  : ""
              }`}
              key={cell}
            >
              {guessList.length > row &&
                splitWords[row].length > cell &&
                splitWords[row][cell].letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default Guess;
