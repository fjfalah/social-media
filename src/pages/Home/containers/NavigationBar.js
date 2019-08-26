import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
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
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
