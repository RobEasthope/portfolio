import React from 'react';
import { Flex, Heading, Text } from 'rebass';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import LandingJumbotron from '../components/LandingJumbotron/LandingJumbotron';
import Layout from '../components/Layout/Layout';
import RelativeBox from '../components/RelativeBox/RelativeBox';
import SEO from '../components/Seo/Seo';
import LandingTagline from '../components/LandingTagline/LandingTagline';

import PortfolioIndex from '../components/PortfolioIndex/PortfolioIndex';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import PortfolioCardTitle from '../components/PortfolioCardTitle/PortfolioCardTitle';
import PortfolioCardDescription from '../components/PortfolioCardDescription/PortfolioCardDescription';

export const query = graphql`
  {
    landing: sanityLanding {
      tagline
      image {
        imageAsset {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        altText
      }
    }
    portfolio: sanityPortfolio {
      title
      portfolioIndex {
        id
        shortTitle
        description
        slug {
          current
        }
        thumbnailImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
const LandingPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  if (!data) {
    throw new Error('Missing landing page data.');
  }

  const { landing, portfolio } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        {/* Landing */}
        <Flex as="section">
          <RelativeBox width={1} px="0">
            <LandingTagline
              as="h1"
              width="100%"
              px="4"
              m="0"
              fontSize={{ sm: 5, md: 6, lg: 7, xlg: 8 }}
            >
              {landing.tagline}
            </LandingTagline>
            <LandingJumbotron fluid={landing.image.imageAsset.asset.fluid} />
          </RelativeBox>
        </Flex>

        {/* Portfolio */}
        <Flex
          as="section"
          flexDirection="row"
          flexWrap="wrap"
          px="4"
          justifyContent="flex-end"
        >
          <Heading
            as="h2"
            width={1}
            fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
            textAlign="right"
          >
            {portfolio.title}
          </Heading>
          <PortfolioIndex
            as="ul"
            width="auto"
            py="4"
            px="2"
            m="0"
            flexWrap="wrap"
          >
            {portfolio.portfolioIndex.map(project => (
              <PortfolioCard
                as="li"
                width={1}
                px="3"
                mb="4"
                key={project.slug.current}
              >
                <Link to={project.slug.current}>
                  {/* {project.thumbnailImage && (
                      <Image fluid={project.thumbnailImage.asset.fluid} />
                    )} */}
                  <PortfolioCardTitle>{project.shortTitle}</PortfolioCardTitle>
                  <PortfolioCardDescription>
                    {project.description}
                  </PortfolioCardDescription>
                </Link>
              </PortfolioCard>
            ))}
          </PortfolioIndex>
        </Flex>

        {/* About */}
        <Flex
          as="section"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="flex-end"
          px="4"
        >
          <Heading
            as="h2"
            width={1}
            fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
            textAlign="right"
          >
            About
          </Heading>
        </Flex>

        {/* Contact */}
        <Flex
          as="section"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="flex-end"
          px="4"
        >
          <Heading
            as="h2"
            width={1}
            fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
            textAlign="right"
          >
            Contact
          </Heading>
        </Flex>
      </Layout>
    </React.Fragment>
  );
};

export default LandingPage;
