import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "adobe-garamond-pro", serif;
    font-weight: 400;
    color: ${palette.ink};

    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  p {
    margin-top: 0;
  }

  a {
    color: ${palette.ink};

    &:hover {
      color: ${palette.imperialRed};
    }
  }
`;

export default GlobalStyles;
