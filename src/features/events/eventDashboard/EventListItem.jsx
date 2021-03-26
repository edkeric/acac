import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAtt from './EventListAtt'

export default function EventListItem() {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header content='Event Title' />
                            <Item.Description>
                                Hosted by Cunt
                            </Item.Description>
                        </Item.Content>
                    </Item>

                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                    <Icon name='marker' /> Place
                </span>
            </Segment>
            <Segment secondary>
              <List>
                  <EventListAtt />
                  <EventListAtt />
                  <EventListAtt />
              </List>
            </Segment>
            <Segment clearing>
                <div>Event Description</div>
                <Button color='black' floated='right' content='View' />
            </Segment>

        </Segment.Group>
    )
}
