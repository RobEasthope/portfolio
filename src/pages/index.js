import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

export const query = graphql`
  {
    allSanityProject(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          title
          description
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Portfolio</h1>

    {data.allSanityProject.edges.map(({ node: project }) => (
      <li key={project.slug.current}>
        <h2 style={{ fontSize: '24px' }}>
          <Link to={project.slug.current}>{project.title}</Link>
        </h2>
      </li>
    ))}
  </Layout>
);

export default IndexPage;
