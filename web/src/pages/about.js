import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import AboutSection from '../sections/AboutSection/AboutSection';

export const query = graphql`
  {
    about: sanityAbout {
      title
      _rawBody
      portrait {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
const AboutPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  if (!data) {
    throw new Error('Missing landing page data.');
  }

  const { about } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        <AboutSection
          title={about.title}
          blurb={about._rawBody}
          portrait={about.portrait}
        />
      </Layout>
    </React.Fragment>
  );
};

AboutPage.defaultProps = {
  data: null,
  errors: null,
};

AboutPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default AboutPage;
