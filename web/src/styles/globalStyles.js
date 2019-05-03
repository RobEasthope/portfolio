import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "adobe-garamond-pro", serif;
    font-weight: 400;
    color: ${palette.ink};
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

  video:focus {
    outline: none;
  }

  /* Scrollspy styling */
  .is-current {
    font-style: italic;
  }
`;

export default GlobalStyles;
