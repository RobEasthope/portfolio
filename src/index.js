import React from 'react';
import { hydrate, render } from 'react-dom';
import ReactGA from 'react-ga';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const snap = navigator.userAgent !== 'ReactSnap';
const production = process.env.NODE_ENV === 'production';
if (production && snap) {
  ReactGA.initialize('XX-XXXXXXXX-X');
}

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
registerServiceWorker();
