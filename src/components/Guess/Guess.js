import React from "react";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

const Guess = ({ guessList }) => {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);
  const cells = range(0, WORD_LENGTH);

  const splitWords = guessList.map((word) => [...word]);

  return (
    <div className="guess-results">
      {rows.map((row) => (
        <p className="guess" key={row}>
          {cells.map((cell) => (
            <span className="cell" key={cell}>
              {guessList.length > row &&
                splitWords[row].length > cell &&
                splitWords[row][cell]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default Guess;
