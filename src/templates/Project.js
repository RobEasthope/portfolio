import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
    }
  }
`;

const Project = ({ data }) => (
  <Layout>
    <h1>{data.sanityProject.title}</h1>
  </Layout>
);

export default Project;
