import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Container, ListGroup, Button,
} from 'reactstrap'
import {
  Box, Loading,
} from '../../../components'
import PostList from '../../../containers/PostList'

const ButtonDetail = styled(Link)`
  height: fit-content;
`

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
                rightContent={(
                  <ButtonDetail to={`/posts/${post.id}`}>
                    <Button outline color="secondary" size="sm">detail</Button>
                  </ButtonDetail>
                )}
              />
            )
          })
        }
      </ListGroup>
    </Container>
  )
}

export default Posts
