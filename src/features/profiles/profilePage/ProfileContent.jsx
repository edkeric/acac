import React from 'react'
import { Tab } from 'semantic-ui-react'
import AboutTab from './AboutTab'

export default function ProfileContent({ profile, isCurrentUser }) {
  const panes = [
    {
      menuItem: 'About',
      render: () => (
        <AboutTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: 'Photos', render: () => <Tab.Pane>Photos</Tab.Pane> },
    { menuItem: 'Events', render: () => <Tab.Pane>Events</Tab.Pane> },
    { menuItem: 'Stalking', render: () => <Tab.Pane>Stalking</Tab.Pane> },
    { menuItem: 'Stalkers', render: () => <Tab.Pane>Stalkers</Tab.Pane> },
  ]
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
    />
  )
}
