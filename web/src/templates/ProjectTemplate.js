import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Box, Flex, Link, Text } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import ProjectTitle from '../components/ProjectTitle/ProjectTitle';
import ProjectText from '../components/ProjectText/ProjectText';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';

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

const ProjectTemplate = props => {
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
      <Flex
        id="portfolio"
        as="section"
        flexDirection="row"
        flexWrap="wrap"
        px="4"
        justifyContent="flex-end"
      >
        <ProjectTitle as="h2" width={1} textAlign="right">
          {data.sanityProject.title}
        </ProjectTitle>
        <Flex flexWrap="wrap">
          <Box width={{ b: 1 / 3 }}>
            {data.sanityProject.client && (
              <ProjectDetail
                detailTitle="Client"
                detailText={data.sanityProject.client.name}
              />
            )}
            {data.sanityProject.agency && (
              <ProjectDetail
                detailTitle="Client"
                detailText={data.sanityProject.agency.name}
              />
            )}
            {data.sanityProject.projectUrl &&
              data.sanityProject.projectUrlTitle && (
                <ProjectDetail
                  detailTitle={data.sanityProject.projectUrlTitle}
                  detailText={data.sanityProject.projectUrl}
                  detailUrl={data.sanityProject.projectUrl}
                />
              )}
            {data.sanityProject.repoUrl && (
              <ProjectDetail
                detailTitle="Github repo"
                detailText={data.sanityProject.repoUrl}
                detailUrl={data.sanityProject.repoUrl}
              />
            )}
          </Box>
          <Box width={{ b: 2 / 3 }} pb="4">
            <ProjectText>
              <BlockContent blocks={data.sanityProject._rawBody} />
            </ProjectText>
          </Box>
        </Flex>
        <Box width={{ b: 1, md: 7 / 10 }} px="4">
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
      </Flex>
    </Layout>
  );
};

export default ProjectTemplate;
