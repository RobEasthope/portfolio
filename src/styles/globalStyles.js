import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    color: ${palette.ink};
  }
`;

export default GlobalStyles;
