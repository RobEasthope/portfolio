import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Box, Flex, Link, Text } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
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
    <SEO
      title={data.sanityProject.shortTitle}
      description={data.sanityProject.shortDescription}
      // keywords={data.sanityLandingPage.seoMetaData.keywords}
    />
    <ContentContainer>
      <Flex flexWrap="wrap">
        <Box width={1 / 1} px="3" py="5">
          {data.sanityProject.projectType && (
            <Text>{data.sanityProject.projectType}</Text>
          )}
          {data.sanityProject.title && (
            <Text as="h1">{data.sanityProject.title}</Text>
          )}
        </Box>
        <Box width={{ b: 1, md: 2 / 3 }} px="3">
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
        <Box width={{ b: 1, md: 1 / 3 }} px="3">
          {data.sanityProject.date && <Text>{data.sanityProject.date}</Text>}

          <BlockContent blocks={data.sanityProject._rawBody} />
          {data.sanityProject.repoUrl && (
            <React.Fragment>
              <Text>Client</Text>
              <Text pb="3">{data.sanityProject.client.name}</Text>
            </React.Fragment>
          )}
          {data.sanityProject.repoUrl && (
            <React.Fragment>
              <Text>Agency</Text>
              <Text pb="3">{data.sanityProject.agency.name}</Text>
            </React.Fragment>
          )}
          {data.sanityProject.repoUrl && (
            <React.Fragment>
              <Text>Production site</Text>
              <Text pb="3">
                <Link to={data.sanityProject.projectUrlTitle}>
                  {data.sanityProject.projectUrlTitle}
                </Link>
              </Text>
            </React.Fragment>
          )}
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
    </ContentContainer>
  </Layout>
);

export default Project;
