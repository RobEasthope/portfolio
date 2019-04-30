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
  min-width: 6em;
  max-width: 12em;

  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

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
  if (detailUrl && detailTitle && detailText) {
    return (
      <ProjectDetailWrapper width={1}>
        <dt>{detailTitle}</dt>
        <dd>
          <ProjectDetailLink href={detailUrl} target="_blank">
            {detailText}
          </ProjectDetailLink>
        </dd>
      </ProjectDetailWrapper>
    );
  }
  if (detailTitle && detailText) {
    return (
      <ProjectDetailWrapper width={1}>
        <dt as="dt">{detailTitle}</dt>
        <dd as="dd">{detailText}</dd>
      </ProjectDetailWrapper>
    );
  }
  return (
    <ProjectDetailWrapper width={1}>
      <dd as="dd">{detailText}</dd>
    </ProjectDetailWrapper>
  );
};

export default ProjectDetail;
