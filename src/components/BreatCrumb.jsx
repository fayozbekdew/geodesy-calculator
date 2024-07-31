import React from "react";
import { Link } from "react-router-dom";

function BreatCrumb({ locat:bread }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
      <li>
          <Link to='/'>Home</Link>
        </li>
          <li>
            <Link to={bread}>
              {bread?.charAt()?.toUpperCase() + bread?.slice(1).toLowerCase()}
            </Link>
          </li>
      </ul>
    </div>
  );
}

export default BreatCrumb;
