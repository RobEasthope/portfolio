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
    color: ${palette.ink};

    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 420px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    @media (min-width: 1020px) {
      padding-left: 80px;
      padding-right: 80px;
    }
  }

  img {
    max-width: 100%;
  }
`;
