import styled from 'styled-components';
import { Link } from 'gatsby';

const PortfolioCardTitle = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 8px;
  text-align: center;
  color: black;
  text-decoration: none;
`;

export default PortfolioCardTitle;
