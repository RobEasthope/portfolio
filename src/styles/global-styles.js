import { injectGlobal } from 'styled-components';
import palette from './colour-palette';
import rem from '../utils/rem';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,500|Nunito+Sans:400,600');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: 'EB Garamond', serif;
    color: black;
    font-size: 100%;
    margin-left: 10%;
    margin-right: 10%;
  }

  a {
    color: ${palette.ink};
    text-decoration: none;

    :hover {
      color: #e75b4c;
      transition: 0.4s ease-in-out;
    }
  }

  p {
    margin-top: 0;
  }

  img {
    max-width: 100%;
  }
`;
