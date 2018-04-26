import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = props => (
  <Helmet>
    <title>Home</title>

    {/* Open Graph meta data */}
    <meta property="og:title" content="Home" />
    <meta property="og:url" content="http://robeasthope.com/UID GOES HERE" />
    <meta property="og:site_name" content="Rob Easthope" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="DESCRIPTION GOES HERE" />
    <meta property="og:image" content="DEFAULT OR PROJECT THUMBNAIL IMAGE" />
    <meta property="og:locale" content="en_GB" />

    {/* Twitter meta data */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@robeasthope" />
    <meta name="twitter:creator" content="@robeasthope" />
  </Helmet>
);

export default MetaData;
