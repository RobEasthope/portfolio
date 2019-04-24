import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "adobe-garamond-pro", serif;
    color: ${palette.ink};
  }
`;

export default GlobalStyles;
