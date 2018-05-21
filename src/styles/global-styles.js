import { injectGlobal } from 'styled-components';
import palette from './colour-palette';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy');
  @import url("https://use.typekit.net/wij4ayn.css");

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

  body {
    font-family: 'adobe-garamond-pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${palette.ink};

    
  }

  a {
    color: ${palette.ink};
    text-decoration: none;
  }

  p {
    margin-top: 0;
  }

  img {
    max-width: 100%;
  }
`;
