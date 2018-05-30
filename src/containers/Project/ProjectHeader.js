import styled from 'styled-components';
import Imgix from 'react-imgix';

const ProjectHeader = styled(Imgix)`
  position: relative;
  text-align: center;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;

  width: 100%;
  height: 50vh;

  margin-bottom: 5em;
`;

export default ProjectHeader;
