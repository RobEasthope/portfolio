import React from 'react';
import styled from 'styled-components';
import { Block } from '../Grid/Grid';

import imgixUrl from '../../utils/imgixUrl';

import PortfolioCardWrapper from './PortfolioCardWrapper';
import PortfolioCardBkg from './PortfolioCardBkg';
import PortfolioCardTitle from './PortfolioCardTitle';

const PortfolioCard = props => (
  <PortfolioCardWrapper
    size={{
      xs: 1 / 1,
      sm: 1 / 2,
      md: 1 / 3,
      lg: 1 / 4,
      xl: 1 / 5,
    }}
  >
    <PortfolioCardBkg src={imgixUrl(props.bkg)} type="bg" fluid>
      <PortfolioCardTitle>{props.title}</PortfolioCardTitle>
    </PortfolioCardBkg>
  </PortfolioCardWrapper>
);

export default PortfolioCard;
