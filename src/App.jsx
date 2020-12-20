import React, { Component } from "react";
import {
  Container,
  Button,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import winner from "./modules/ChoosingAWinner";
import TopHeader from "./components/TopHeader";
import DisplayRules from "./components/DisplayRules";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["rock", "paper", "scissors"];
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
        <Segment>
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
                      size="huge"
                    >
                      Rock
                    </Button>
                    <Button.Or />
                    <Button
                      data-cy="paper-button"
                      name="paper"
                      onClick={this.startGame}
                      color="yellow"
                      size="huge"
                    >
                      Paper
                    </Button>
                    <Button.Or />
                    <Button
                      data-cy="scissors-button"
                      name="scissors"
                      onClick={this.startGame}
                      color="teal"
                      size="huge"
                    >
                      Scissors
                    </Button>
                  </Button.Group>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Message data-cy="result">
        <Message.Header >
          {result}
        </Message.Header>
        </Message>
        <Footer />
      </Container>
    );
  }
}
export default App;
