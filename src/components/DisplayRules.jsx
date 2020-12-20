import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'

const DisplayRules = () => (
  <Message color="teal" size="massive" className="rulesmessage" id="rules">
      <Message.Content>
        <Header id="gamerules" as="h2" >
          <Icon name='announcement' size="tiny" />
            Rules of the game
        </Header>
        <Message.Item>Rock beats scissors</Message.Item>
        <Message.Item>Scissors beats paper</Message.Item>
        <Message.Item>Paper beats rock</Message.Item>
      </Message.Content>
    </Message>

)
export default DisplayRules