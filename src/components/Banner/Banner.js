import React from "react";

const NewGameButton = ({ handleClick, children }) => {
  return (
    <button className="new-game" onClick={handleClick}>
      {children}
    </button>
  );
};

const Banner = ({ isWinner, isGameOver, guesses, newGame }) => {
  if (isWinner) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {guesses} {guesses === 1 ? " guess" : " guesses"}
          </strong>
          .
        </p>
        <NewGameButton handleClick={newGame}>New game</NewGameButton>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
        <NewGameButton handleClick={newGame}>Try Again</NewGameButton>
      </div>
    );
  }

  return null;
};

export default Banner;
