import * as React from "react";
import { Link } from "react-router-dom";
import data from "./linkList";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="Nav">
        {data.map((element, index) => (
          <li key={index} className="Nav-item">
            <Link to={element.href} className="Nav-item-link">
              {element.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
