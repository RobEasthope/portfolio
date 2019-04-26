import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Box, Flex, Link, Text } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import ContentContainer from '../components/Grid/ContentContainer';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      shortTitle
      _rawBody
      gallery {
        _key
        imageAsset {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        altText
      }
      description
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

const Project = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data;

  if (!page) {
    throw new Error('Missing project.');
  }

  return (
    <Layout>
      <SEO
        title={data.sanityProject.shortTitle}
        description={data.sanityProject.shortDescription}
        // keywords={data.sanityLandingPage.seoMetaData.keywords}
      />
      <ContentContainer>
        <Flex flexWrap="wrap" mx="-4">
          <Box width={1 / 1} px="3" pt="7" pb="7" justifyContent="center">
            {data.sanityProject.description && (
              <Text textAlign="center">{data.sanityProject.description}</Text>
            )}
            {data.sanityProject.title && (
              <Text as="h1" textAlign="center">
                {data.sanityProject.title}
              </Text>
            )}
          </Box>
          <Box width={{ b: 1, md: 6 / 10 }} px="4">
            {data.sanityProject.gallery &&
              data.sanityProject.gallery.map(image => (
                <Box mb="4" key={image._key}>
                  <Image
                    fluid={image.imageAsset.asset.fluid}
                    alt={image.altText}
                  />
                </Box>
              ))}
          </Box>

          <Box width={{ b: 1, md: 4 / 10 }} px="4">
            <Box pb="4">
              <BlockContent blocks={data.sanityProject._rawBody} />
            </Box>
            <Flex mx="-16px" flexWrap="wrap">
              <Box width={{ b: 1, lg: 1 / 2 }} px="3">
                {data.sanityProject.client && (
                  <React.Fragment>
                    <Text>Client</Text>
                    <Text pb="4">{data.sanityProject.client.name}</Text>
                  </React.Fragment>
                )}
              </Box>
              <Box width={{ b: 1, lg: 1 / 2 }} px="3">
                {data.sanityProject.agency && (
                  <React.Fragment>
                    <Text>Agency</Text>
                    <Text pb="4">{data.sanityProject.agency.name}</Text>
                  </React.Fragment>
                )}
              </Box>
              <Box width={{ b: 1, lg: 1 / 2 }} px="3">
                {data.sanityProject.projectUrl &&
                  data.sanityProject.projectUrlTitle && (
                    <React.Fragment>
                      <Text>Production site</Text>
                      <Text pb="3">
                        <Link to={data.sanityProject.projectUrl}>
                          {data.sanityProject.projectUrlTitle}
                        </Link>
                      </Text>
                    </React.Fragment>
                  )}
              </Box>
              <Box width={{ b: 1, lg: 1 / 2 }} px="3">
                {data.sanityProject.repoUrl && (
                  <React.Fragment>
                    <Text>Github repo</Text>
                    <Text pb="3">
                      <Link to={data.sanityProject.repoUrl}>
                        {data.sanityProject.repoUrl}
                      </Link>
                    </Text>
                  </React.Fragment>
                )}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </ContentContainer>
    </Layout>
  );
};

export default Project;
