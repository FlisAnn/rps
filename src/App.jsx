import React, { Component } from "react";
import {
  Container,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import winner from "./modules/ChoosingAWinner";
import TopHeader from "./components/TopHeader";
import DisplayRules from "./components/DisplayRules";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["Rock", "paper", "scissors"];
    this.state = {
      humanChoice: "",
    };
  }

  startGame = async (e) => {
    const choice = Math.floor(Math.random() * 3);
    console.log(this.weapons[choice]);
    const result = winner(e.target.name, this.weapons[choice]);
    this.setState({ result: result });
  };

  render() {
    let result;

    if (this.state.result) {
      result = <p>{this.state.result}</p>;
    }

    return (
      <Container id="container">
        <TopHeader />
        <DisplayRules />
        <Button data-cy="rock-button" name="rock" onClick={this.startGame}>
          Rock
        </Button>
        <Button data-cy="paper-button" name="paper" onClick={this.startGame}>
          Paper
        </Button>
        <Button data-cy="scissors-button" name="scissors" onClick={this.startGame}>
          Scissors
        </Button>
        <div id = "result">{result}</div>
        {/* <div>
          <button
            name="Rock"
            data-cy="rock-button"
            link onClick={this.startGame}
            
            name="hand rock outline"
            size="huge"
            color="pink"
          />
          </div>
          <div>
           <Icon
            name="paper"
            data-cy="paper-button"
            link onClick={this.startGame}
            name="hand paper outline"
            size="huge"
            color="pink"
          />
          </div>
          <div>
           <Icon
            name="scissors"
            data-cy="scissors-button"
            link onClick={this.startGame}
        
            name="hand scissors outline"
            size="huge"
            color="pink"
          />
        </div> */}
       
        {/* <Segment placeholder color="teal">
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>VS</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header as="h2" color="grey">
                  You
                </Header>
                <Grid.Row icon>
                  <Button.Group>
                    <Button icon data-cy="rock-button">
                      <Icon
                        name="Rock"
                        data-cy="rock-button"
                        onClick={this.startGame}
                        name="hand rock outline"
                        size="huge"
                        color="pink"
                      />
                    </Button>
                    <Button.Or />
                    <Button
                      icon
                      name="paper"
                      data-cy="paper-button"
                      onClick={this.startGame}
                    >
                      <Icon
                        name="hand paper outline"
                        size="huge"
                        color="yellow"
                        id="humanPaper"
                      />
                    </Button>
                    <Button.Or />
                    <Button
                      icon
                      data-cy="scissors-button"
                      onClick={this.startGame}
                    >
                      <Icon
                        name="hand scissors outline"
                        size="huge"
                        color="teal"
                        id="humanScissors"
                      />
                    </Button>
                  </Button.Group>
                </Grid.Row>

                <Header id="human" color="grey">
                  Rock, Paper or Scissors?
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        {/* <button data-cy="rock-button" name="rock" onClick={this.startGame}>
          Rock
        </button>
        <button data-cy="paper-button" name="paper" onClick={this.startGame}>
          Paper
        </button>
        <button data-cy="scissors-button" name="scissors" onClick={this.startGame}>
          Scissors
        </button> */}

        
        {/* <button data-cy="rock-computer">Rock</button>
        <button data-cy="paper-computer">Paper</button>
        <button data-cy="scissors-computer">Scissors</button> */} 
        {/* <p data-cy="tie-message">It's a tie!</p>
        <p data-cy="human-wins">You win!</p>
        <p data-cy="computer-wins">Computer wins!</p> */}
        <Footer />
      </Container>
    );
  }
}
export default App;
