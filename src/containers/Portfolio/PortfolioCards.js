import React from 'react';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import PrismicReact from 'prismic-reactjs';

const PortfolioCards = props =>
  props.cards.map((slice) => {
    switch (slice.slice_type) {
      case 'portfolio_cards':
        return slice.items.map(card => (
          <PortfolioCard
            key={PrismicReact.RichText.asText(card.project_title)}
            title={PrismicReact.RichText.asText(card.project_title)}
            bkg={card.project_thumbnail.url}
            url={card.project_url.url}
          />
        ));

      default:
        return 'Error?';
    }
  });

export default PortfolioCards;
