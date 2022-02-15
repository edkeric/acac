import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Label, Segment } from 'semantic-ui-react'

export default function EventDetailsSidebar({ att, hostUid }) {
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
        {att.length} {att.length > 1 ? 'People' : 'Person'} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {att.map((att) => (
            <Item
              as={Link}
              to={`/profile/${att.id}`}
              key={att.id}
              style={{ position: 'relative' }}
            >
              {hostUid === att.id && (
                <Label
                  style={{ position: 'absolute' }}
                  color='yellow'
                  ribbon='right'
                  content='Host'
                />
              )}
              <Item.Image
                size='tiny'
                src={att.photoURL || '/assets/user.png'}
              />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>{att.displayName}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  )
}
