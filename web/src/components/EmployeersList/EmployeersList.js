import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Link } from 'rebass';
import ProjectText from '../ProjectText/ProjectText';
import TextLink from '../TextLink/TextLink';
import ProfileListTitle from '../ProfileListTitle/ProfileListTitle';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
  padding-left: 0;
`;

const EmployeersList = props => {
  const { title, list } = props;

  return (
    <>
      {/* <ProfileListTitle>{title}</ProfileListTitle> */}
      <PortfolioIndexWrapper as="p" mb="3em" width={1}>
        <ProjectText as="span">
          A few of the agencies I've worked for are{' '}
        </ProjectText>
        {list.map(item => (
          <ProjectText key={item.id} as="span">
            <TextLink href={item.url} target="_blank" rel="noreferrer noopener">
              {item.name},{' '}
            </TextLink>
          </ProjectText>
        ))}
        <ProjectText as="span">and many others.</ProjectText>
      </PortfolioIndexWrapper>
    </>
  );
};

EmployeersList.defaultProps = {
  title: '',
  list: [],
};

EmployeersList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default EmployeersList;
