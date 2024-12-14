import Game from "../Game";
import Header from "../Header";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <div className="wrapper">
        <Header />

        <div className="game-wrapper">
          <Game />
        </div>
      </div>
    </StrictMode>
  );
}

export default App;
