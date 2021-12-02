import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Preferences, Sessions } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Preferences'>
          <Preferences />
        </Route>
        <Route path='/Sessions'>
          <Sessions />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
