import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const DisplayTie = () => (
  <Message data-cy="tie-message" icon color="yellow" size="huge">
    <Icon name='meh outline' loading />
    <Message.Content>
      <Message.Header>It's a tie!</Message.Header>
    </Message.Content>
  </Message>
)

export default DisplayTie