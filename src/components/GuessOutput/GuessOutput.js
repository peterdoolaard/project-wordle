import React from "react";

const GuessOutput = ({ guessList }) => {
  return (
    <div className="guess-results">
      {guessList.map((word) => (
        <p className="guess" key={crypto.randomUUID()}>
          {word}
        </p>
      ))}
    </div>
  );
};

export default GuessOutput;
