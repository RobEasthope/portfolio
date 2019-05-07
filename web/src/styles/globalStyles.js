import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "adobe-garamond-pro", serif;
    font-weight: 400;
    color: ${colors.ink};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  p {
    margin-top: 0;
  }

  a {
    color: ${colors.ink};

    &:hover {
      color: ${colors.imperialRed};
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
