import React from 'react';
import PrismicReact from 'prismic-reactjs';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const PortfolioCards = props =>
  props.cards.map((slice) => {
    switch (slice.slice_type) {
      case 'portfolio_cards':
        return slice.items.map(card => (
          <PortfolioCard
            key={PrismicReact.RichText.asText(card.project_title)}
            title={card.project_title}
            bkg={card.project_thumbnail.url}
            url={card.project_url.uid}
          />
        ));

      default:
        return 'No Projects found';
    }
  });

export default PortfolioCards;
