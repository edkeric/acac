import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({ setAuth }) {
  return (
    <Menu.Item position='right'>
      <Button onClick={() => setAuth(true)} basic inverted content='Login' />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '2.5em' }}
      />
    </Menu.Item>
  )
}
