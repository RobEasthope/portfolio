import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Portfolio</Link>
      <Link to="/landing">Landing</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Header;
