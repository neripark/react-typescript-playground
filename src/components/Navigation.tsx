import * as React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Tutorial from '../pages/Tutorial'

const Navigation: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">top</Link></li>
          <li><Link to="/tutorial">React tutorial</Link></li>
        </ul>
        <Switch>
          <Route path="/tutorial" component={Tutorial} />
        </Switch>
      </nav>
    </Router>
  )
}

export default Navigation;
