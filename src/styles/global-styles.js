import { injectGlobal } from 'styled-components';
import palette from './colour-palette';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${palette.ink}
  }

  img {
    max-width: 100%;
  }

`;
