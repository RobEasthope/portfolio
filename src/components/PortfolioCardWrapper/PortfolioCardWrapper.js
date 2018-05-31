import styled from 'styled-components';
import Grid from 'styled-components-grid';

import rem from '../../utils/rem';

const PortfolioCardWrapper = styled(Grid.Unit)`
  padding: 0 3em;

  @media (min-width: 420px) {
    margin-bottom: 3em;
  }

  @media (min-width: 1020px) {
    margin-bottom: 3em;
  }
`;

export default PortfolioCardWrapper;
