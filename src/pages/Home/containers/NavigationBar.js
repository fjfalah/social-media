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
} from 'reactstrap'
import { Navigation } from '../../../components'

const NavigationBar = () => {
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
            <Link to="/followers/" className="nav-link">Followers</Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                    FJ
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
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
