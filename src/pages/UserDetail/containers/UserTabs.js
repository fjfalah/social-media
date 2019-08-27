import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

const UserTabs = ({ path, activeTab, handleActiveTab }) => {
  return (
    <Card>
      <Flex jc="space-around">
        <Link to={`${path}`}>
          <Button isActive={activeTab === ''} onClick={() => handleActiveTab('')}>Post</Button>
        </Link>
        <Link to={`${path}/info`}>
          <Button isActive={activeTab === 'info'} onClick={() => handleActiveTab('info')}>Info</Button>
        </Link>
        <Link to={`${path}/album`}>
          <Button isActive={activeTab === 'album'} onClick={() => handleActiveTab('album')}>Album</Button>
        </Link>
      </Flex>
    </Card>
  )
}

export default UserTabs
