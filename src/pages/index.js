import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'rebass';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Container from '../components/Grid/Container';

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
    <Container>
      <h1>Portfolio</h1>
      <ul>
        {data.allSanityProject.edges.map(({ node: project }) => (
          <li key={project.slug.current}>
            <h2 style={{ fontSize: '24px' }}>
              <Link to={project.slug.current}>{project.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
);

export default IndexPage;
