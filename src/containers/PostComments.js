import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Text } from '../components'
import { marked } from '../libraries'

const PostComments = ({ comments }) => {
  return comments && (
    <ListGroup>
      {
        comments.map((comment, index) => (
          <ListGroupItem key={index} className="justify-content-between">
            <Text variant="caption-bold">{comment.email}</Text>
            <Text varian="caption">{comment.name}</Text>
            <Text varian="caption" dangerouslySetInnerHTML={{ __html: marked.parse(comment.body) }} />
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default PostComments
