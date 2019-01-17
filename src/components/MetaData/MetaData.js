import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PrismicReact from 'prismic-reactjs';

const MetaData = props => (
  <Helmet>
    <title>{PrismicReact.RichText.asText(props.metaTitle)}</title>
    <meta
      name="description"
      content={PrismicReact.RichText.asText(props.metaDescription)}
    />
    <link rel="canonical" href={`https://robeasthope.com${props.currentUrl}`} />

    {/* Open Graph meta data */}
    <meta
      property="og:title"
      content={PrismicReact.RichText.asText(props.metaTitle)}
    />
    <meta
      property="og:url"
      content={`https://robeasthope.com${props.currentUrl}`}
    />
    <meta property="og:site_name" content="Rob Easthope" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content={PrismicReact.RichText.asText(props.metaDescription)}
    />
    <meta property="og:image" content={props.metaImage} />
    <meta property="og:locale" content="en_GB" />

    {/* Twitter meta data */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@robeasthope" />
    <meta name="twitter:creator" content="@robeasthope" />
    <meta
      name="twitter:url"
      content={`https://robeasthope.com${props.currentUrl}`}
    />
    <meta
      name="twitter:title"
      content={PrismicReact.RichText.asText(props.metaTitle)}
    />
    <meta
      name="twitter:description"
      content={PrismicReact.RichText.asText(props.metaDescription)}
    />
  </Helmet>
);

MetaData.defaultProps = {
  metaTitle: 'Rob Easthope',
  metaDescription: 'Portfolio',
  currentUrl: '/',
  metaImage: { url: '' },
};

MetaData.propTypes = {
  metaTitle: PropTypes.arrayOf(PropTypes.shape),
  metaDescription: PropTypes.PropTypes.arrayOf(PropTypes.shape),
  currentUrl: PropTypes.string,
  metaImage: PropTypes.string,
};

export default MetaData;
