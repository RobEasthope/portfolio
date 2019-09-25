import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

let sidebarWidth = fontSizing(191, 212);

const MainContent = styled.main`
  flex: 1;

  min-width: 100vw;
  margin-left: 0;
  @media (min-width: ${breakpoints.md}) {
    min-width: calc(100vw - ${sidebarWidth});
    margin-left: ${sidebarWidth};
  }
`;

export default MainContent;
