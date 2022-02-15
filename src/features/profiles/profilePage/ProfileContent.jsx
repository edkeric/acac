import React from 'react'
import { Tab } from 'semantic-ui-react'
import AboutTab from './AboutTab'
import EventsTab from './EventsTab'
import PhotosTab from './PhotosTab'

export default function ProfileContent({ profile, isCurrentUser }) {
  const panes = [
    {
      menuItem: 'About',
      render: () => (
        <AboutTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    {
      menuItem: 'Photos',
      render: () => (
        <PhotosTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: 'Events', render: () => <EventsTab profile={profile} /> },
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
