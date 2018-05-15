import React from 'react';
import styled from 'styled-components';

import PortfolioCardBkg from './PortfolioCardBkg';
import PortfolioCardTitle from './PortfolioCardTitle';

const PortfolioCard = props => (
  <PortfolioCardBkg src={props.bkg} type="bg" fluid>
    <PortfolioCardTitle>{props.title}</PortfolioCardTitle>
  </PortfolioCardBkg>
);

export default PortfolioCard;
