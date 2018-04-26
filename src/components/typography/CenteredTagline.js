import styled from 'styled-components';
import colors from 'colors.css';
import palette from '../../styles/colour-palette';

const CenteredTagline = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${palette.waterPink};
  margin: 0;
`;

export default CenteredTagline;
