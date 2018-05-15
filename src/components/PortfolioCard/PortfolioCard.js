import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PrismicReact from 'prismic-reactjs';

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
    <Link to={props.url}>
      <PortfolioCardBkg src={imgixUrl(props.bkg)} type="bg" fluid>
        <PortfolioCardTitle>{PrismicReact.RichText.asText(props.title)}</PortfolioCardTitle>
      </PortfolioCardBkg>
    </Link>
  </PortfolioCardWrapper>
);

PortfolioCard.defaultProps = {
  bkg: '',
  title: '???',
  url: '#',
};

PortfolioCard.propTypes = {
  bkg: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.shape),
  url: PropTypes.string,
};

export default PortfolioCard;
