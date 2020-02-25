import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';
import ProjectText from '../ProjectText/ProjectText';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
  padding-left: 0;
`;

const EducationList = props => {
  const { title, list } = props;

  return (
    <>
      <ProjectText>{title}</ProjectText>
      <PortfolioIndexWrapper as="ul" width={1}>
        {list.map(item => (
          <ProjectText key={item.id} as="li">
            {item.qualification} at {item.name}
          </ProjectText>
        ))}
      </PortfolioIndexWrapper>
    </>
  );
};

EducationList.defaultProps = {
  title: '',
  list: [],
};

EducationList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default EducationList;
