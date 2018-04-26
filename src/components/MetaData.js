import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PrismicReact from 'prismic-reactjs';

const MetaData = props => (
  <Helmet>
    <title>{PrismicReact.RichText.asText(props.metaTitle)}</title>

    {/* Open Graph meta data */}
    <meta property="og:title" content={PrismicReact.RichText.asText(props.metaTitle)} />
    <meta property="og:url" content={`http://robeasthope.com${props.currentUrl}`} />
    <meta property="og:site_name" content="Rob Easthope" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={PrismicReact.RichText.asText(props.metaDescription)} />
    <meta property="og:image" content={props.metaImage} />
    <meta property="og:locale" content="en_GB" />

    {/* Twitter meta data */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@robeasthope" />
    <meta name="twitter:creator" content="@robeasthope" />
  </Helmet>
);

MetaData.defaultProps = {
  meta_title: 'Rob Easthope',
  meta_description: 'Portfolio',
  currentUrl: '/',
  meta_image: { url: '' },
};

MetaData.propTypes = {
  meta_title: PropTypes.shape,
  meta_description: PropTypes.shape,
  currentUrl: PropTypes.string,
  meta_image: PropTypes.string,
};

export default MetaData;
