import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function NavBar({ setFormOpen }) {
  const history = useHistory()
  const [auth, setAuth] = useState(false)

  function handleSignOut() {
    setAuth(false)
    history.push('/')
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 30 }} />
          EventCore
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        {auth && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {auth ? (
          <SignIn signOut={handleSignOut} />
        ) : (
          <SignOut setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  )
}
