import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {
  Router, Switch, Route, BrowserRouter,
} from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Home, PostDetail, Users } from './pages'
import { GlobalStyles } from './components'
import history from './routes/history'
import UserDetail from './pages/UserDetail/UserDetail'

const App = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts/:postId" component={PostDetail} />
              <Route exact path="/users" component={Users} />
              <Route path="/users/:userId" component={UserDetail} />
            </Switch>
          </Router>
        </BrowserRouter>
        <GlobalStyles />
      </Col>
    </Row>
  )
}

export default App
