import React from 'react'
import styled from 'styled-components'
import { ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import theme from '../constants/theme'
import { Flex, Text } from '../components'
import { marked } from '../libraries'

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

const PostList = ({ post, rightContent, children }) => {
  const {
    userId, userData, title, body,
  } = post
  return (
    <ListGroupItem>
      <Flex jc="flex-start">
        <Avatar />
        <Flex fd="column">
          <Link to={`/user/${userId}`}>
            <Username variant="paragraph-bold" color={theme.color.oceanBlue}>{userData.name} <Text as="span" color={theme.color.grey}>@{userData.username}</Text></Username>
          </Link>
          <Text variant="paragraph-bold">{title}</Text>
          <Text variant="caption" dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
        </Flex>
        {rightContent}
      </Flex>
      {children}
    </ListGroupItem>
  )
}

export default PostList
