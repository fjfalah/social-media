import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Home } from './pages'
import { GlobalStyles } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Col>
      </Row>
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
