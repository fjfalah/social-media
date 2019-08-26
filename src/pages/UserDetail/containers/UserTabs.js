import React from 'react'
import styled from 'styled-components'
import { Card } from 'reactstrap'
import { Flex } from '../../../components'
import theme from '../../../constants/theme'

const Button = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${(props) => (props.isActive ? theme.color.oceanBlue : theme.color.black)};
  font-weight: ${(props) => (props.isActive ? '500' : '400')};
`

const UserTabs = ({ activeTab, handleActiveTab }) => {
  return (
    <Card>
      <Flex>
        <Button isActive={activeTab === 'post'} onClick={() => handleActiveTab('post')}>Post</Button>
        <Button isActive={activeTab === 'info'} onClick={() => handleActiveTab('info')}>Info</Button>
        <Button isActive={activeTab === 'album'} onClick={() => handleActiveTab('album')}>Album</Button>
      </Flex>
    </Card>
  )
}

export default UserTabs
