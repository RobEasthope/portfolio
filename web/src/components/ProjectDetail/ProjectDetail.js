import React from 'react';
import styled from 'styled-components';
import { Box, Link } from 'rebass';

import fontSizing from '../../utils/fontsizing';
import { measure } from '../../styles/theme';
import palette from '../../styles/palette';

const ProjectDetailText = styled(Text)`
  font-size: ${fontSizing(20, 24)};
  margin: 0;
  max-width: ${measure.narrow};
`;
const ProjectDetailLink = styled(Link)`
  font-size: ${fontSizing(20, 24)};
  color: ${palette.ink};
  margin: 0;
  max-width: ${measure.narrow};
`;

const ProjectDetail = ({ detailTitle, detailText, detailUrl }) => {
  if (detailUrl) {
    return (
      <Box width={{ b: 1 }} pb="3">
        <ProjectDetailText as="dt" width={1}>
          {detailTitle}
        </ProjectDetailText>
        <ProjectDetailText as="dd">
          <ProjectDetailLink href={detailUrl}>{detailText}</ProjectDetailLink>
        </ProjectDetailText>
      </Box>
    );
  }
  return (
    <Box width={{ b: 1 }} pb="3">
      <ProjectDetailText as="dt" width={1}>
        {detailTitle}
      </ProjectDetailText>
      <ProjectDetailText as="dd">{detailText}</ProjectDetailText>
    </Box>
  );
};

export default ProjectDetail;
