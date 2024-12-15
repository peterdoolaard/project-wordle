import React from "react";
import { KEYS } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Key from "../Key";

const Keyboard = ({ guessList, answer }) => {
  const processLetters = guessList.map((word) => {
    return checkGuess(word, answer);
  });

  return (
    <section className="keyboard">
      {KEYS.map((row, index) => {
        return (
          <div className="row" key={index}>
            {row.map((letter) => {
              const letterStatus =
                processLetters.flat().findLast((item) => item.letter === letter)
                  ?.status || "";
              return <Key key={letter} letter={letter} status={letterStatus} />;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Keyboard;
