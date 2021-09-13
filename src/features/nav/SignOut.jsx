import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Menu } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'

export default function SignOut({ setAuth }) {
  const dispatch = useDispatch()
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() => dispatch(openModal({ modalType: 'LoginForm' }))}
        basic
        inverted
        content='Login'
      />
      <Button
        onClick={() => dispatch(openModal({ modalType: 'RegisterForm' }))}
        basic
        inverted
        content='Register'
        style={{ marginLeft: '2.5em' }}
      />
    </Menu.Item>
  )
}
