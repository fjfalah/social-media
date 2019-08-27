import React from 'react'
import { Card } from 'reactstrap'
import styled from 'styled-components'
import {
  Flex, Text, Box,
} from '../../../components'
import theme from '../../../constants/theme'

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`

const Header = styled(Card)`
  padding: 10px;
`

const ProfileHeader = ({ account }) => {
  const {
    name, username,
  } = account
  return (
    <Header>
      <Flex fd="column" ai="center">
        <Avatar src={require('@/assets/images/profile.jpg')} />
        <Box h="10" />
        <Text variant="title-sm" color={theme.color.oceanBlue}>{name}</Text>
        <Text variant="title-sm" color={theme.color.grey}>@{username}</Text>
      </Flex>
    </Header>
  )
}

export default ProfileHeader
