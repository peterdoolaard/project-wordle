import React from "react";

const Key = ({ letter, onClick, status }) => {
  return (
    <button className={`key ${status}`} onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
};

export default Key;
