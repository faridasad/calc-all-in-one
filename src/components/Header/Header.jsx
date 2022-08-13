import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>calc(all[one])</h1>
      </Link>
      <button>Primary Button</button>
    </header>
  );
}

export default Header;
