import * as React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="Nav">
        <li className="Nav-item">
          <Link to="/" className="Nav-item-link">
            top
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/tutorial" className="Nav-item-link">
            tutorial
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/nextfocus" className="Nav-item-link">
            next focus
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/contexttest" className="Nav-item-link">
            context test
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/async-component" className="Nav-item-link">
            async component
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/function-prop-test" className="Nav-item-link">
            function prop test
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/exif-reader-test" className="Nav-item-link">
            ExifReader test
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
