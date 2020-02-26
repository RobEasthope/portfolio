import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';
import ProjectText from '../ProjectText/ProjectText';
import ProfileListTitle from '../ProfileListTitle/ProfileListTitle';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
  padding-left: 0;
`;

const ProfileList = props => {
  const { title, list } = props;

  return (
    <>
      <ProfileListTitle>{title}</ProfileListTitle>
      <PortfolioIndexWrapper as="ul" width={1}>
        {list.map(item => (
          <ProjectText key={item.id} as="li">
            {item.name}
          </ProjectText>
        ))}
      </PortfolioIndexWrapper>
    </>
  );
};

ProfileList.defaultProps = {
  title: '',
  list: [],
};

ProfileList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default ProfileList;
