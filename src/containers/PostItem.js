import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../constants/theme'
import { Flex, Text } from '../components'
import { marked } from '../libraries'
import history from '../routes/history'

const Root = styled.div``

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

const UsernameWrapper = ({ userId, isInUserProfile, children }) => {
  return isInUserProfile
    ? children
    : <Link to={`/users/${userId}`}>{children}</Link>
}
const PostItem = ({
  post, isDetailPost, children, isInUserProfile,
}) => {
  const {
    id, userId, userData, title, body,
  } = post
  return (
    <Root className="list-group-item" onClick={() => isDetailPost && history.push(`/posts/${id}`)}>
      <Flex jc="flex-start">
        <Avatar />
        <Flex fd="column">
          <UsernameWrapper isInUserProfile={isInUserProfile} userId={userId}>
            <Username variant="paragraph-bold" color={theme.color.oceanBlue}>{userData.name} <Text as="span" color={theme.color.grey}>@{userData.username}</Text></Username>
          </UsernameWrapper>
          <Text variant="paragraph-bold">{title}</Text>
          <Text variant="caption" dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
        </Flex>
      </Flex>
      {children}
    </Root>
  )
}

export default PostItem
