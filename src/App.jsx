import React, { Component } from "react";
import winner from "./modules/ChoosingAWinner";
import ChoosingAWinner from "./modules/ChoosingAWinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["rock", "paper", "scissors"];
    this.state = {
      humanChoice: ''
    };
  }

  startGame = async (e) => {
    const choice = Math.floor(Math.random() * 3);
    console.log(this.weapons[choice])
    const result = winner(e.target.name, this.weapons[choice]);
    this.setState({ result: result });
  };

  render() {
    let result;

    if (this.state.result) {
      result = <p>{this.state.result}</p>;
    }

    return (
      <>
      <h1>Lets play</h1>
        <button data-cy="rock-button" name="rock" onClick={this.startGame}>
          Rock
        </button>
        <button data-cy="paper-button" name="paper" onClick={this.startGame}>
          Paper
        </button>
        <button data-cy="scissors-button" name="scissors" onClick={this.startGame}>
          Scissors
        </button>

<div>{result}</div>
        {/* <button data-cy="rock-computer">Rock</button>
        <button data-cy="paper-computer">Paper</button>
        <button data-cy="scissors-computer">Scissors</button> */}
        {/* <p data-cy="tie-message">It's a tie!</p>
        <p data-cy="human-wins">You win!</p>
        <p data-cy="computer-wins">Computer wins!</p> */}
      </>
    );
  }
}
export default App;
