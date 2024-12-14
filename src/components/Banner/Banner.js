import React from "react";

const Banner = ({ isWinner, isGameOver, guesses }) => {
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
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    );
  }

  return null;
};

export default Banner;
