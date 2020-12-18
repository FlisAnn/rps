import React from 'react'

// import DisplayComputer from './DisplayComputer'
import {  
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react"

const GameContainer = () => (
  <Segment placeholder color="teal">
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>VS</Divider>

      <Grid.Row verticalAlign='middle'>
      <Grid.Column>
    <Header as="h2" color="grey">
      You
    </Header>
    <Grid.Row icon>
      <Button.Group>
        <Button icon data-cy="rock-button" onClick={this.startGame}>
          <Icon name="hand rock outline" size="huge" color="pink" />
        </Button>
        <Button.Or />
        <Button icon data-cy="paper-button" onClick={this.startGame}>
          <Icon
            name="hand paper outline"
            size="huge"
            color="yellow"
            id="humanPaper"
          />
        </Button>
        <Button.Or />
        <Button icon data-cy="scissors-button" onClick={this.startGame}>
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
  </Segment>
)

export default GameContainer;


