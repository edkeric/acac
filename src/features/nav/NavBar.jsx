import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function NavBar({ setFormOpen }) {
  const { auth } = useSelector((state) => state.auth)

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 30 }} />
          EventCore
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
        {auth && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {auth ? <SignIn /> : <SignOut />}
      </Container>
    </Menu>
  )
}
