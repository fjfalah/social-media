import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages'
import { GlobalStyles } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
