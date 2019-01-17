import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { ThemeProvider } from "styled-components";

// Styling
import "sanitize.css/sanitize.css";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

import buildContext from "./utils/prismicContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import WideWrapper from "./components/WideWrapper/WideWrapper";
import Header from "./components/Header/Header";

import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";

// Google Analytics
const production = process.env.NODE_ENV === "production";
if (production) {
  ReactGA.initialize("UA-41755337-1");
}

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      prismicCtx: null,
    };
  }

  componentWillMount() {
    buildContext()
      .then(prismicCtx => {
        this.setState({ prismicCtx });
      })
      .catch(e => {
        console.error(
          `Cannot contact the API, check your prismic configuration:\n${e}`
        );
      });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router onUpdate={fireTracking} prismicCtx={this.state.prismicCtx}>
          <ScrollToTop>
            <GlobalStyles />
            <WideWrapper>
              <Header />

              <Switch>
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Portfolio
                      {...routeProps}
                      prismicCtx={this.state.prismicCtx}
                    />
                  )}
                />
                <Route
                  exact
                  path="/landing"
                  render={routeProps => (
                    <Landing
                      {...routeProps}
                      prismicCtx={this.state.prismicCtx}
                    />
                  )}
                />
                <Route
                  path="/portfolio/:uid"
                  render={routeProps => (
                    <Project
                      {...routeProps}
                      prismicCtx={this.state.prismicCtx}
                    />
                  )}
                />
                <Route
                  path="/about"
                  render={routeProps => (
                    <About {...routeProps} prismicCtx={this.state.prismicCtx} />
                  )}
                />
                <Route component={Error404} />
              </Switch>
            </WideWrapper>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
