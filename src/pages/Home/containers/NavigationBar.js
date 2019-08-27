import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap'
import { Navigation } from '../../../components'
import history from '../../../routes/history'

const NavigationBar = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Navigation>
      <Link to="/" className="navbar-brand">
        Social Media
      </Link>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/users" className="nav-link">
              {
                users !== null && (
                  <Badge color="secondary">{users.length}</Badge>
                )
              }
              &nbsp;
              Users
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              FJ
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => history.push('/profile')}>
                Profile
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navigation>
  )
}

export default NavigationBar
