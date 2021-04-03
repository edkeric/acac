import React from 'react'
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react'

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='motorhead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
          EventCore
        </Header>
        <Button onClick={() => history.push('/events')} size='huge' inverted>
          Let's Go!
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}
