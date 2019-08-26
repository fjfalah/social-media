import React from 'react'
import { Container, Button } from 'reactstrap'
import styled from 'styled-components'
import PostList from '../../../containers/PostList'
import {
  Loading, Box, Flex,
} from '../../../components'
import PostComments from '../../../containers/PostComments'

const Icon = styled.img`
  height: 10px;
  margin-right: 5px;
`

const PostContent = ({ post }) => {
  if (post === null) {
    return (
      <Loading marginTop="66" />
    )
  }

  return (
    <Container>
      <Box h="66" />
      <PostList post={post} isDetailPost>
        <Flex jc="flex-end">
          <Button size="sm" color="info">
            <Icon src={require('@/assets/icons/reply-white.svg')} alt="" />
            Reply
          </Button>
        </Flex>
      </PostList>
      <Box h="10" />
      <PostComments comments={post.comments} />
    </Container>
  )
}

export default PostContent
