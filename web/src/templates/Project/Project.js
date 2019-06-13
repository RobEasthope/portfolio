import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Box, Flex } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
import SanityMuxPlayer from 'sanity-mux-player';

import styled from 'styled-components';

import GraphQLErrorList from '../../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/Seo/Seo';
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle';
import ProjectText from '../../components/ProjectText/ProjectText';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
import ProjectDetailText from '../../components/ProjectDetailText/ProjectDetailText';
import MediaGallery from '../../components/MediaGallery/MediaGallery';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      shortTitle
      _rawBody
      showreel {
        _key
        _type
        asset {
          _key
          _type
          assetId
          playbackId
          status
        }
      }
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
        url
      }
      agency {
        name
        url
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

const ProjectTextWrapper = styled(Flex)`
  max-width: 900px;
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

  const project = data.sanityProject;

  if (!project) {
    throw new Error('Missing project.');
  }

  return (
    <Layout>
      <SEO
        title={`${project.shortTitle} - Rob Easthope`}
        description={project.description}
      // keywords={project.seoMetaData.keywords}
      />
      <Flex
        id="portfolio"
        as="section"
        flexDirection="row"
        flexWrap="wrap"
        px="4"
        justifyContent={{ b: 'flex-start', md: 'flex-end' }}
      >
        <Box width={1}>
          <ProjectTitle as="h2" textAlign={{ b: 'left', md: 'right' }}>
            {project.title}
          </ProjectTitle>
        </Box>
        <ProjectTextWrapper
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{ b: 'flex-start', md: 'flex-end' }}
        >
          <Box mb="3" width={{ b: 1 / 1, xlg: 2 / 3 }} order={{ b: 1, xlg: 2 }}>
            <ProjectText>
              <BlockContent blocks={project._rawBody} />
            </ProjectText>
          </Box>

          <Box
            as="dl"
            width={{ b: 1 / 1, xlg: 1 / 3 }}
            m="0"
            pb="3"
            order={{ b: 2, xlg: 1 }}
          >
            {project.date && (
              <ProjectDetailText mb="1em">{project.date}</ProjectDetailText>
            )}
            {project.client && (
              <ProjectDetail
                detailTitle="Client"
                detailText={project.client.name}
                detailUrl={project.client.url}
              />
            )}
            {project.agency && (
              <ProjectDetail
                detailTitle="Agency"
                detailText={project.agency.name}
                detailUrl={project.agency.url}
              />
            )}
            {project.projectUrl && project.projectUrlTitle && (
              <ProjectDetail
                detailTitle={project.projectUrlTitle}
                detailText={project.projectUrl}
                detailUrl={project.projectUrl}
              />
            )}
            {project.repoUrl && (
              <ProjectDetail
                detailTitle="Github repo"
                detailText={project.repoUrl}
                detailUrl={project.repoUrl}
              />
            )}
          </Box>
        </ProjectTextWrapper>

        <MediaGallery mt="4" order={{ b: 2, lg: 3 }}>
          {project.showreel && (
            <Box width={1} mb="4">
              <SanityMuxPlayer
                assetDocument={project.showreel.asset}
                autoload
                showControls
                muted={false}
                loop={false}
              />
            </Box>
          )}

          {project.gallery &&
            project.gallery.map(image => (
              <Box mb="4" key={image._key}>
                <Image
                  fluid={image.imageAsset.asset.fluid}
                  alt={image.altText}
                />
              </Box>
            ))}
        </MediaGallery>
      </Flex>
    </Layout>
  );
};

Project.defaultProps = {
  data: null,
  errors: null,
};

Project.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default Project;
