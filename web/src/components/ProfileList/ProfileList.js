import React from 'react';
import PropTypes from 'prop-types';
import ProjectText from '../ProjectText/ProjectText';
import TextLink from '../TextLink/TextLink';
import ProfileListTitle from '../ProfileListTitle/ProfileListTitle';
import UnstyledList from '../UnstyledList/UnstyledList';

const ProfileList = props => {
  const { title, list } = props;

  return (
    <>
      <ProfileListTitle>{title}</ProfileListTitle>
      <UnstyledList as="ul" mb="3em" width={1}>
        {list.map(item => (
          <ProjectText key={item.id} as="li">
            <TextLink href={item.url} target="_blank" rel="noreferrer noopener">
              {item.name}
            </TextLink>
          </ProjectText>
        ))}
      </UnstyledList>
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
