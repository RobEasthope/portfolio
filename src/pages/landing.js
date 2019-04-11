import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

export const query = graphql`
  {
    sanityLandingPage {
      tagline
      seoMetaData {
        title
        description
      }
    }
  }
`;

const LandingPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.sanityLandingPage.seoMetaData.title}
      description={data.sanityLandingPage.seoMetaData.description}
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>{data.sanityLandingPage.tagline}</h1>
  </Layout>
);

export default LandingPage;
