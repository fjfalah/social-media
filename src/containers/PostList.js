import React from 'react'
import styled from 'styled-components'
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

const Root = ({ children, isDetailPost, id }) => {
  return isDetailPost
    ? <div to={`/posts/${id}`} className="list-group-item">{children}</div>
    : <Link to={`/posts/${id}`} className="list-group-item list-group-item-action">{children}</Link>
}

const PostList = ({ post, isDetailPost, children }) => {
  const {
    id, userId, userData, title, body,
  } = post
  return (
    <Root isDetailPost={isDetailPost} id={id}>
      <Flex jc="flex-start">
        <Avatar />
        <Flex fd="column">
          <Link to={`/users/${userId}`}>
            <Username variant="paragraph-bold" color={theme.color.oceanBlue}>{userData.name} <Text as="span" color={theme.color.grey}>@{userData.username}</Text></Username>
          </Link>
          <Text variant="paragraph-bold">{title}</Text>
          <Text variant="caption" dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
        </Flex>
      </Flex>
      {children}
    </Root>
  )
}

export default PostList
