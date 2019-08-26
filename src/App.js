import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Home, PostDetail } from './pages'
import { GlobalStyles } from './components'
import history from './routes/history'

const App = () => {
  return (
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts/:postId" component={PostDetail} />
            </Switch>
          </Router>
          <GlobalStyles />
        </Col>
      </Row>
  )
}

export default App
