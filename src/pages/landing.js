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
        keywords
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
      keywords={data.sanityLandingPage.seoMetaData.keywords}
    />
    <h1>{data.sanityLandingPage.tagline}</h1>
  </Layout>
);

export default LandingPage;
