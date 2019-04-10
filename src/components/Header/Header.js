import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Header;
