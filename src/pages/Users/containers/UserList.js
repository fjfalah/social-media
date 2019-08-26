import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import {
  Loading, Box, Flex, Text,
} from '../../../components'
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

const UserList = ({ users }) => {
  if (users === null) {
    return <Loading marginTop="66" />
  }

  return (
    <Container>
      <Box h="66" />
      <ListGroup>
        {
          users.map((user, index) => {
            const { id, name, username } = user
            return (
              <ListGroupItem key={index}>
                <Flex jc="flex-start">
                  <Avatar />
                  <Flex ai="center">
                    <Link to={`/users/${id}`}>
                      <Username variant="paragraph-bold" color={theme.color.oceanBlue}>{name}</Username>
                      <Text color={theme.color.grey}>@{username}</Text>
                    </Link>
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

export default UserList
