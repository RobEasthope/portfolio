import React from 'react';
import { Flex, Box } from 'rebass';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import ProjectTitle from '../components/ProjectTitle/ProjectTitle';
import ProjectText from '../components/ProjectText/ProjectText';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex
      id="portfolio"
      as="section"
      flexDirection="row"
      flexWrap="wrap"
      px="4"
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        justifyContent={{ b: 'flex-start', md: 'flex-end' }}
      >
        <Box mb="3" mt="5" order={{ b: 1, xlg: 2 }}>
          <ProjectText>
            <p style={{ fontStyle: 'italic' }}>Fear not, brave friend...</p>
            <p>
              Apologies, but you just found a route that actually doesn't
              exist...
            </p>
            <p>
              <Link to="/">Go back to the landing page</Link>
            </p>

            <img
              src="https://uploads2.wikiart.org/images/gustave-dore/the-inferno-canto-8-1.jpg!HD.jpg"
              alt="The Inferno, Canto 8 | Gustave Dore"
            />
          </ProjectText>
        </Box>
      </Flex>
    </Flex>
  </Layout>
);

export default NotFoundPage;
