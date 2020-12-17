import React from "react";
import ChoosingAWinner from "./modules/ChoosingAWinner";


function App() {
  return (
    <>
      <button data-cy="rock-button">Rock</button>
      <button data-cy="paper-button">Paper</button>
      <button data-cy="scissors-button">Scissors</button>

      <button data-cy="rock-computer">Rock</button>
      <button data-cy="paper-computer">Paper</button>
      <button data-cy="scissors-computer">Scissors</button>
      <p data-cy="tie-message">It's a tie!</p>
      <p data-cy="human-wins">You win!</p>
      <p data-cy="computer-wins">Computer wins!</p>
    </>
  );
}

export default App;
