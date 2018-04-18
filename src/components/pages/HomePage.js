import React from 'react';
import { Helmet } from 'react-helmet';

import Title from '../typography/Title';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Home</title>

      {/* Twitter meta data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@robeasthope" />
      <meta name="twitter:creator" content="@robeasthope" />
    </Helmet>

    <Title>Home</Title>
  </div>
);

export default HomePage;
