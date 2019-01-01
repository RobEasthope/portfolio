import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';

import imgixUrl from '../../../utils/imgixUrl';
import prismicLinkResolver from '../../../prismic-link-resolver';

import PortfolioCardWrapper from './PortfolioCardWrapper/PortfolioCardWrapper';
import PortfolioCardBkg from './PortfolioCardBkg/PortfolioCardBkg';
import PortfolioCardTitle from './PortfolioCardTitle/PortfolioCardTitle';
import PortfolioCardSubTitle from './PortfolioCardSubTitle/PortfolioCardSubTitle';
import PortfolioCardLink from './PortfolioCardLink/PortfolioCardLink';

const PortfolioCard = props => {
  if (props.url.uid) {
    return (
      <PortfolioCardWrapper
        size={{
          xs: 1 / 1,
          sm: 1 / 2,
          md: 1 / 3,
        }}
      >
        <PortfolioCardLink to={prismicLinkResolver(props.url)}>
          <PortfolioCardBkg src={imgixUrl(props.bkg)} type="bg" fluid />
          <PortfolioCardTitle>
            {PrismicReact.RichText.asText(props.title)}
            <PortfolioCardSubTitle>
              {PrismicReact.RichText.asText(props.subtitle)}
            </PortfolioCardSubTitle>
          </PortfolioCardTitle>
        </PortfolioCardLink>
      </PortfolioCardWrapper>
    );
  }
  return null;
};

PortfolioCard.defaultProps = {
  bkg: '',
  title: '???',
  subtitle: '???',
  // url: '#',
};

PortfolioCard.propTypes = {
  bkg: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.shape),
  subtitle: PropTypes.arrayOf(PropTypes.shape),
  // url: PropTypes.objectOf(PropTypes.array),
};

export default PortfolioCard;
