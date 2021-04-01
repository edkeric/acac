import React from 'react'
import { Image, List } from 'semantic-ui-react'

export default function EventListAtt({ att }) {
  return (
    <List.Item>
      <Image size='mini' circular src={att.photoURL} />
    </List.Item>
  )
}
