import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { Text, Box } from '../components'
import { marked } from '../libraries'

const CommentItem = ({
  email, name, body, children,
}) => {
  return (
    <ListGroupItem className="justify-content-between">
      <Text variant="caption-bold">{email}</Text>
      <Text varian="caption">{name}</Text>
      <Text varian="caption" dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
      {children}
    </ListGroupItem>
  )
}

export default CommentItem
