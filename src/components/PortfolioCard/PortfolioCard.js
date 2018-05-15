import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

import PortfolioCardBkg from './PortfolioCardBkg';
import PortfolioCardTitle from './PortfolioCardTitle';

const PortfolioCard = props => (
  <Grid.Unit size={1 / 4}>
    <PortfolioCardBkg src={props.bkg} type="bg" fluid>
      <PortfolioCardTitle>{props.title}</PortfolioCardTitle>
    </PortfolioCardBkg>
  </Grid.Unit>
);

export default PortfolioCard;
