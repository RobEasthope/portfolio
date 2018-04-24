import React from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import ReactGA from 'react-ga';

import Nav from './../../components/navigation/Nav';

import HomePage from './../../components/pages/HomePage';
import PortfolioPage from './../../components/pages/PortfolioPage';
import Project from './../../containers/Project/Project';
import AboutPage from './../../components/pages/AboutPage';
import ContactPage from './../../components/pages/ContactPage';
import Error404Page from './../../components/pages/Error404Page';

import { store, history } from '../../store';
import { prismicApiConnectionRequest } from './actions';

// Google Analytics
const snap = navigator.userAgent !== 'ReactSnap';
const production = process.env.NODE_ENV === 'production';
if (production && snap) {
  ReactGA.initialize('XX-XXXXXXXX-X');
}

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

class App extends React.Component {
  componentWillMount() {
    this.props.actions.prismicApiConnectionRequest();
  }

  render() {
    return (
      <Provider store={store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter onUpdate={fireTracking} history={history}>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/project/:uid" component={Project} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={Error404Page} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  // apiData: selectPrismicDoc(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ prismicApiConnectionRequest }, dispatch),
});

Project.propTypes = {
  // actions: PropTypes.shape.isRequired,
  // getPrismicDoc: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
