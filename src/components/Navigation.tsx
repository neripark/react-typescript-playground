import * as React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="Nav">
        <li className="Nav-item">
          <Link to="/" className="Nav-item-link">top</Link>
        </li>
        <li className="Nav-item">
          <Link to="/tutorial" className="Nav-item-link">tutorial</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
