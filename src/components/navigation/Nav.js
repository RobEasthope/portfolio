import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/project/landing">Prismic test</Link>
      </li>
    </ul>
  </nav>
);

export default ContactPage;
