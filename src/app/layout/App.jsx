import React from 'react'
import { useSelector } from 'react-redux'
import { Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Container } from 'semantic-ui-react'
import AccountPage from '../../features/auth/AccountPage'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import EventDetailsPage from '../../features/events/eventDetails/EventDetailsPage'
import EventForm from '../../features/events/eventForm/EventForm'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'
import ProfilePage from '../../features/profiles/profilePage/ProfilePage'
import Sandbox from '../../features/reducers/Sandbox'
import ErrorComponent from '../common/errors/ErrorComponent'
import ModalManager from '../common/modals/ModalManager'
import LoadingComponent from './LoadingComponent'

export default function App() {
  const { key } = useLocation()
  const { initialized } = useSelector((state) => state.async)

  if (!initialized) return <LoadingComponent content='Loading app...' />
  return (
    <>
      <ModalManager />
      <ToastContainer position='bottom-right' />
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
              <Route path='/error' component={ErrorComponent} />
              <Route path='/account' component={AccountPage} />
              <Route path='/profile/:id' component={ProfilePage} />
            </Container>
          </>
        )}
      />
    </>
  )
}
