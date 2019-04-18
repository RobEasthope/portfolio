import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      shortTitle
      mainText
      projectType
      shortDescription
      client {
        name
      }
      agency {
        name
      }
      date
      projectUrlTitle
      projectUrl
      repoUrl
      techUsed {
        name
      }
      seoMetaData {
        keywords
      }
    }
  }
`;

const Project = ({ data }) => (
  <Layout>
    <h1>{data.sanityProject.title}</h1>
    <h1>{data.sanityProject.title}</h1>
  </Layout>
);

export default Project;
