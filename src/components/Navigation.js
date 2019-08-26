import React from 'react'
import styled from 'styled-components'
import { Navbar, Container } from 'reactstrap'

const Root = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
`

const Navigation = ({ children }) => {
  return (
    <Root>
      <Navbar color="dark" dark expand="md">
        <Container>
          {children}
        </Container>
      </Navbar>
    </Root>
  )
}

export default Navigation
