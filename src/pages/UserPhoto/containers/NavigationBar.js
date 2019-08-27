import React from 'react'
import styled from 'styled-components'
import { NavbarBrand } from 'reactstrap'
import { Navigation } from '../../../components'
import history from '../../../routes/history'

const BackIcon = styled.img`
  height: 20px;
  margin-right: 10px;
`

const NavigationBar = ({ user }) => {
  return (
    <Navigation>
      <NavbarBrand href="#" className="mr-auto" onClick={() => history.push(`/users/${user.id}/album`)}>
        <BackIcon src={require('@/assets/icons/left-arrow-white.svg')} alt="" />
        {user?.name}&apos;s photos
      </NavbarBrand>
    </Navigation>
  )
}

export default NavigationBar
