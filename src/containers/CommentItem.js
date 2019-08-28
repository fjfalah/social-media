import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { Text } from '../components'
import { marked } from '../libraries'

const CommentItem = ({
  comment, children,
}) => {
  const { email, name, body } = comment
  return (
    <ListGroupItem className="justify-content-between">
      <Text variant="paragraph-bold">{email}</Text>
      <Text variant="caption-bold">{name}</Text>
      <Text variant="caption" dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
      {children}
    </ListGroupItem>
  )
}

export default CommentItem
