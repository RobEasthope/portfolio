import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Container from '../components/Grid/Container';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1>About</h1>
    </Container>
  </Layout>
);

export default AboutPage;
