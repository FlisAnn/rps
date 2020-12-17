import React, { Component } from "react";
import winner from "./modules/ChoosingAWinner";
import ChoosingAWinner from "./modules/ChoosingAWinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["rock", "paper", "scissors"];
    this.state = {
      humanChoice: "",
    };
  }

  startGame = async (e) => {
    const game = Math.floor(Math.random() * 3);
    const result = await winner(e.target.name, this.weapons[game]);
    this.setState({ result: result });
  };

  render() {
    let result;

    if (this.state.result) {
      result = <p>{this.state.result}</p>;
    }

    return (
      <>
        <button data-cy="rock-button" onClick={this.startGame}>
          Rock
        </button>
        <button data-cy="paper-button" onClick={this.startGame}>
          Paper
        </button>
        <button data-cy="scissors-button" onClick={this.startGame}>
          Scissors
        </button>

        {/* <button data-cy="rock-computer">Rock</button>
        <button data-cy="paper-computer">Paper</button>
        <button data-cy="scissors-computer">Scissors</button> */}
        <p data-cy="tie-message">It's a tie!</p>
        <p data-cy="human-wins">You win!</p>
        <p data-cy="computer-wins">Computer wins!</p>
      </>
    );
  }
}
export default App;
