import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Landing page</h1>
  </Layout>
);

export default IndexPage;
