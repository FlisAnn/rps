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

        {/* <Button
          data-cy="rock-button"
          name="rock"
          onClick={this.startGame}
          color="pink"
        >
          Rock
        </Button>
        <Button
          data-cy="paper-button"
          name="paper"
          onClick={this.startGame}
          color="yellow"
        >
          Paper
        </Button>
        <Button
          data-cy="scissors-button"
          name="scissors"
          onClick={this.startGame}
          color="teal"
        >
          Scissors
        </Button> */}
        

        <Segment placeholder color="teal">
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header as="h2" color="grey">
                  Pick your weapon
                </Header>
                <Grid.Row icon>
                  <Button.Group>
                    <Button
                      data-cy="rock-button"
                      name="rock"
                      onClick={this.startGame}
                      color="pink"
                    >
                      Rock
                    </Button>
                    <Button.Or />
                    <Button
                      data-cy="paper-button"
                      name="paper"
                      onClick={this.startGame}
                      color="yellow"
                    >
                      Paper
                    </Button>
                    <Button.Or />
                    <Button
                      data-cy="scissors-button"
                      name="scissors"
                      onClick={this.startGame}
                      color="teal"
                    >
                      Scissors
                    </Button>
                  </Button.Group>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <div id="result">{result}</div>
       

    
        {/* <p data-cy="tie-message">It's a tie!</p>
        <p data-cy="human-wins">You win!</p>
        <p data-cy="computer-wins">Computer wins!</p> */}
        <Footer />
      </Container>
    );
  }
}
export default App;
