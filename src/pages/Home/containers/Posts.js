import React from 'react'
import {
  Container, ListGroup,
} from 'reactstrap'
import {
  Box, Loading,
} from '../../../components'
import PostList from '../../../containers/PostList'

const Posts = ({ posts }) => {
  if (posts === null) {
    return (
      <Loading marginTop={66} />
    )
  }

  return (
    <Container>
      <Box h="66" />
      <ListGroup>
        {
          posts.map((post) => {
            return (
              <PostList
                key={post.id}
                post={post}
              />
            )
          })
        }
      </ListGroup>
    </Container>
  )
}

export default Posts
