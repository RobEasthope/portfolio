import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
  </Layout>
);

export default AboutPage;
