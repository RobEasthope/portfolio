import React from 'react';
import { Helmet } from 'react-helmet';

import Title from '../typography/Title';

const Error404Page = () => (
  <div>
    <Helmet>
      <title>404</title>
    </Helmet>

    <Title>Error 404</Title>
  </div>
);

export default Error404Page;
