import React from 'react';
import styled from 'styled-components';
import { Block } from '../Grid/Grid';

import imgixUrl from '../../utils/imgixUrl';

import PortfolioCardBkg from './PortfolioCardBkg';
import PortfolioCardTitle from './PortfolioCardTitle';

const PortfolioCard = props => (
  <Block size={1 / 4}>
    <PortfolioCardBkg src={imgixUrl(props.bkg)} type="bg" fluid>
      <PortfolioCardTitle>{props.title}</PortfolioCardTitle>
    </PortfolioCardBkg>
  </Block>
);

export default PortfolioCard;
