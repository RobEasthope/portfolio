import { injectGlobal } from 'styled-components';
import palette from './colour-palette';
import rem from '../utils/rem';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,500|Nunito+Sans:400,600');

  * {
    box-sizing: border-box;

  }

  ::-moz-selection {
    background: ${palette.ink};
    color: #FFF;
    text-shadow: none
  }

  ::selection, {
    background: ${palette.ink};
    color: #FFF;
    text-shadow: none
  }

  html, body {
    font-size: 100%;
  }

  body {
    font-family: "EB Garamond", Georgia, serif;
    color: ${palette.ink};
    margin-left: 10%;
    margin-right: 10%;
  }

  a {
    color: ${palette.ink};
    text-decoration: none;

    :hover {
      color: ${palette.highlight};
      transition: 0.4s ease-in-out;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    line-height: 1.5em;
    margin-bottom: .5em
  }

  h1 {
    font-size: ${rem(36)};
    font-weight: 500;

    @media only screen and (min-width: 30em) {
      font-size: ${rem(48)};
    }
    @media only screen and (min-width: 37.5em) {
      font-size: ${rem(56)};
    }

    @media only screen and (min-width: 48em) {
      font-size: ${rem(64)};
    }

    @media only screen and (min-width: 64em) {
      font-size: ${rem(84)};
    }
  }

  h2 {
    font-size: ${rem(28)};

    @media only screen and (min-width: 30em) {
      font-size: ${rem(36)};
    }
  }

  h3 {
    font-size: ${rem(24)};

    @media only screen and (min-width: 30em) {
      font-size: ${rem(32)};
    }
  }

  h4 {
    font-size: ${rem(22)};

    @media only screen and (min-width: 30em) {
      font-size: ${rem(28)};
    }
  }

  h5 {
    font-size: ${rem(24)};
  }

  h6 {
    font-size: ${rem(16)};
  }

  p {
    font-size: ${rem(18)};
    line-height: 1.65em
    margin-top: 0;
    margin-bottom: 1.5em;

    @media only screen and (min-width: 30em) {
      font-size: ${rem(22)};
      line-height: 1.75em;
    }
  }



  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle
  }
`;
