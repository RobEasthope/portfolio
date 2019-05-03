import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Box, Flex } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
import SanityMuxPlayer from 'sanity-mux-player';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import ProjectTitle from '../components/ProjectTitle/ProjectTitle';
import ProjectText from '../components/ProjectText/ProjectText';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import ProjectDetailText from '../components/ProjectDetailText/ProjectDetailText';
import MediaGallery from '../components/MediaGallery/MediaGallery';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      shortTitle
      _rawBody
      showreel {
        asset {
          _id
          _rev
          _type
          data {
            aspect_ratio
            created_at
            duration
            id
            max_stored_frame_rate
            max_stored_resolution
            mp4_support
            passthrough
            playback_ids {
              id
              policy
            }
            status
            tracks {
              duration
              id
              max_frame_rate
              max_height
              max_width
              type
            }
          }
          filename
          playbackId
          status
          thumbTime
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
        title={`${data.sanityProject.shortTitle} - Rob Easthope`}
        description={data.sanityProject.description}
        // keywords={data.sanityProject.seoMetaData.keywords}
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
            {data.sanityProject.title}
          </ProjectTitle>
        </Box>
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{ b: 'flex-start', md: 'flex-end' }}
        >
          <Box mb="3" order={{ b: 1, xlg: 2 }}>
            <ProjectText>
              <BlockContent blocks={data.sanityProject._rawBody} />
            </ProjectText>
          </Box>

          <Box as="dl" m="0" pb="3" order={{ b: 3, xlg: 1 }}>
            {data.sanityProject.date && (
              <ProjectDetailText mb="1em">
                {data.sanityProject.date}
              </ProjectDetailText>
            )}
            {data.sanityProject.client && (
              <ProjectDetail
                detailTitle="Client"
                detailText={data.sanityProject.client.name}
                detailUrl={data.sanityProject.client.url}
              />
            )}
            {data.sanityProject.agency && (
              <ProjectDetail
                detailTitle="Agency"
                detailText={data.sanityProject.agency.name}
                detailUrl={data.sanityProject.agency.url}
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
        </Flex>

        <MediaGallery mt="4" order={{ b: 2, xlg: 3 }}>
          {data.sanityProject.showreel && (
            <Box width={1} mb="4">
              <SanityMuxPlayer
                assetDocument={data.sanityProject.showreel.asset}
                autoload
                showControls
                muted={false}
                loop={false}
              />
            </Box>
          )}

          {data.sanityProject.gallery &&
            data.sanityProject.gallery.map(image => (
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

export default ProjectTemplate;
