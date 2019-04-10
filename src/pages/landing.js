import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

const LandingPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Landing</h1>
  </Layout>
);

export default LandingPage;
