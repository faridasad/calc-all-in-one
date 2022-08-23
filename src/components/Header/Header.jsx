import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="images/logo.svg" alt="logo" />
      </Link>
      <button>Primary Button</button>
    </header>
  );
}

export default Header;
