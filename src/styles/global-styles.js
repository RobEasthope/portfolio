import { injectGlobal } from 'styled-components';
import palette from './colour-palette';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy');

  @font-face {
      font-family: 'League Spartan';
      src: url('leaguespartan-bold.eot');
      src: url('leaguespartan-bold.eot?#iefix') format('embedded-opentype'),
           url('leaguespartan-bold.woff2') format('woff2'),
           url('leaguespartan-bold.woff') format('woff'),
           url('leaguespartan-bold.ttf') format('truetype'),
           url('leaguespartan-bold.svg#league_spartanbold') format('svg');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'hk_grotesklight';
      src: url('hkgrotesk-light-webfont.woff2') format('woff2'),
           url('hkgrotesk-light-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'hk_grotesklight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${palette.ink};

    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 420px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    @media (min-width: 1020px) {
      padding-left: 100px;
      padding-right: 100px;
    }
  }

  img {
    max-width: 100%;
  }
`;
