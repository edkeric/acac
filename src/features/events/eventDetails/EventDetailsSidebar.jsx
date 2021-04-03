import React from 'react'
import { Item, Segment } from 'semantic-ui-react'

export default function EventDetailsSidebar() {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          <Item style={{ position: 'relative' }}>
            <Item.Image size='tiny' src='/assets/user.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>
                <span>Suleiman</span>
              </Item.Header>
            </Item.Content>
          </Item>
          <Item style={{ position: 'relative' }}>
            <Item.Image size='tiny' src='/assets/user.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>
                <span>Mustapha</span>
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </>
  )
}
