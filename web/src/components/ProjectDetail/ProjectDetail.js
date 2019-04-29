import React from 'react';
import styled from 'styled-components';
import { Box, Link } from 'rebass';

import fontSizing from '../../utils/fontsizing';
import { measure } from '../../styles/theme';
import palette from '../../styles/palette';

const ProjectDetailWrapper = styled(Box)`
  display: block;
  font-size: ${fontSizing(20, 24)};
  margin-right: 2em;
  max-width: ${measure.narrow};

  dt,
  dd {
    margin: 0;
  }

  dd {
    margin-bottom: 1em;
  }
`;
const ProjectDetailLink = styled(Link)`
  display: block;
  font-size: ${fontSizing(20, 24)};
  color: ${palette.ink};
  margin: 0;
  max-width: ${measure.narrow};
`;

const ProjectDetail = ({ detailTitle, detailText, detailUrl }) => {
  if (detailUrl) {
    return (
      <ProjectDetailWrapper width={1}>
        <dt>{detailTitle}</dt>
        <dd>
          <ProjectDetailLink href={detailUrl}>{detailText}</ProjectDetailLink>
        </dd>
      </ProjectDetailWrapper>
    );
  }
  return (
    <ProjectDetailWrapper width={1}>
      <dt as="dt">{detailTitle}</dt>
      <dd as="dd">{detailText}</dd>
    </ProjectDetailWrapper>
  );
};

export default ProjectDetail;
