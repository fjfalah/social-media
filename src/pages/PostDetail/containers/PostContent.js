import React from 'react'
import { Container, Button, ListGroup } from 'reactstrap'
import styled from 'styled-components'
import PostItem from '../../../containers/PostItem'
import {
  Loading, Box, Flex,
} from '../../../components'
import CommentItem from '../../../containers/CommentItem'

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
      <PostItem post={post} isDetailPost>
        <Flex jc="flex-end">
          <Button size="sm" color="info">
            <Icon src={require('@/assets/icons/reply-white.svg')} alt="" />
            Reply
          </Button>
        </Flex>
      </PostItem>
      <Box h="10" />
      {
        post.comments && (
          <ListGroup>
            {
              post.comments.map((comment, index) => (
                <CommentItem
                  key={index}
                  email={comment.email}
                  name={comment.name}
                  body={comment.body}
                />
              ))
            }
          </ListGroup>
        )
      }

    </Container>
  )
}

export default PostContent
