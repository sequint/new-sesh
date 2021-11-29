import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Home,
  Sessions,
  Preferences
} from '../../pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='sessions'>
          <Sessions />
        </Route>
        <Route path='preferences'>
          <Preferences />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
