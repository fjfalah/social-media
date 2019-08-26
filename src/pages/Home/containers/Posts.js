import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Container, Spinner, ListGroup, ListGroupItem,
} from 'reactstrap'
import { Box, Flex, Text } from '../../../components'
import theme from '../../../constants/theme'

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: ${theme.color.grey10};
  margin-right: 20px;
  flex-shrink: 0;
`

const Username = styled(Text)`
  font-weight: 500;
`

const Posts = ({ posts }) => {
  if (posts === null) {
    return (
      <Spinner color="dark" />
    )
  }

  return (
    <Container>
      <Box h="66" />
      <ListGroup>
        {
          posts.map((post) => {
            return (
              <ListGroupItem key={post.id}>
                <Flex jc="flex-start">
                  <Avatar />
                  <Flex fd="column">
                    <Link to={`/user/${post.userId}`}>
                      <Username variant="paragraph-bold" color={theme.color.oceanBlue}>{post.userData.name} <Text as="span" color={theme.color.grey}>@{post.userData.username}</Text></Username>
                    </Link>
                    <Text variant="paragraph-bold">{post.title}</Text>
                    <Text variant="caption" dangerouslySetInnerHTML={{ __html: post.body }} />
                  </Flex>
                </Flex>

              </ListGroupItem>
            )
          })
        }
      </ListGroup>
    </Container>
  )
}

export default Posts
