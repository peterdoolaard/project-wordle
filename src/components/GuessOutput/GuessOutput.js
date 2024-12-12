import React from "react";

function GuessOutput({ guessList }) {
  console.log(guessList);
  return (
    <div className="guess-results">
      {guessList.map((word) => (
        <p className="guess" key={crypto.randomUUID()}>
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessOutput;
