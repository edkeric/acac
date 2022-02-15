import React from 'react'
import { Link } from 'react-router-dom'
import { Image, List } from 'semantic-ui-react'

export default function EventListAtt({ att }) {
  return (
    <List.Item as={Link} to={`/profile/${att.id}`}>
      <Image size='mini' circular src={att.photoURL} />
    </List.Item>
  )
}
