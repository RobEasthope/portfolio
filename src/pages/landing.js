import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

export const query = graphql`
  {
    sanityLandingPage {
      tagline
    }
  }
`;

const LandingPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{data.sanityLandingPage.tagline}</h1>
  </Layout>
);

export default LandingPage;
