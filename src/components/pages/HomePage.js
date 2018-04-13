import React from 'react';
import { Helmet } from 'react-helmet';

import Title from 'components/typography/Title';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Title>Home</Title>
  </div>
);

export default HomePage;
