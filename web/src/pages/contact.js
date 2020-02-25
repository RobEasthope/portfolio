import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import ContactSection from '../sections/ContactSection/ContactSection';

export const query = graphql`
  {
    contact: sanityDetails {
      email
      github
      linkedin
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

  const { contact } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        <ContactSection
          title="Contact"
          email={contact.email}
          linkedin={contact.linkedin}
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
