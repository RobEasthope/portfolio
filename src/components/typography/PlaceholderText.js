import styled from 'styled-components';
import colors from 'colors.css';
import palette from '../../styles/colour-palette';

const PlaceholderText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: ${palette.waterPink};
  margin: 0;
  padding: 10px;
  background-color: white;

  a {
    color: ${palette.waterPink};
    text-decoration: none;
  }
  p {
    margin-top: 0;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default PlaceholderText;
