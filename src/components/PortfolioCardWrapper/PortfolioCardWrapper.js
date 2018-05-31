import styled from 'styled-components';
import Grid from 'styled-components-grid';

import rem from '../../utils/rem';

const PortfolioCardWrapper = styled(Grid.Unit)`
  padding: 0 ${rem(20)};

  @media (min-width: 420px) {
    margin-bottom: 2em;
  }

  @media (min-width: 1020px) {
    margin-bottom: 5em;
  }
`;

export default PortfolioCardWrapper;
