import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from 'components/pages/HomePage';
import PortfolioPage from 'components/pages/PortfolioPage';
import AboutPage from 'components/pages/AboutPage';
import ContactPage from 'components/pages/ContactPage';

const App = () => (
  <Router>
    <div>
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
      </ul>

      <hr />

      <Route exact path="/" component={HomePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  </Router>
);

export default App;
