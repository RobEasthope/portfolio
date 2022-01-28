import styled from 'styled-components';
import { Box } from 'rebass';

import fontSizing from '../../utils/fontsizing';

const ProjectDetailText = styled(Box)`
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

    a {
      text-decoration: none;
    }
  }
`;

export default ProjectDetailText;
