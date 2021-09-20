import React from 'react'
import {
  Button,
  Divider,
  Grid,
  Header,
  Item,
  Reveal,
  Segment,
  Statistic,
  StatisticGroup,
} from 'semantic-ui-react'

export default function ProfileHeader({ profile, isCurrentUser }) {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                avatar
                size='small'
                src={profile.photoURL || '/assets/user.png'}
              />
              <Item.Content verticalAlign='middle'>
                <Header
                  as='h1'
                  style={{ display: 'block', marginBottom: 10 }}
                  content={profile.displayName}
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <StatisticGroup>
            <Statistic label='Stalkers' value={10} />
            <Statistic label='Stalking' value={5} />
          </StatisticGroup>

          {!isCurrentUser && (
            <>
              <Divider />
              <Reveal animated='move'>
                <Reveal.Content visible style={{ width: '100' }}>
                  <Button fluid color='teal' content='Stalking' />
                </Reveal.Content>
                <Reveal.Content hidden style={{ width: '100' }}>
                  <Button basic fluid color='red' content='Drop' />
                </Reveal.Content>
              </Reveal>
            </>
          )}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}
