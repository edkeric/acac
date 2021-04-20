import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import EventDetailsPage from '../../features/events/eventDetails/EventDetailsPage'
import EventForm from '../../features/events/eventForm/EventForm'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'
import Sandbox from '../../features/reducers/Sandbox'
import ModalManager from '../common/modals/ModalManager'

export default function App() {
  const { key } = useLocation()
  return (
    <>
      <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/sandbox' component={Sandbox} />
              <Route path='/events/:id' component={EventDetailsPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  )
}
