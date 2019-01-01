import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../styles/colour-palette';

const LogoLink = styled(Link)`
  display: inline-block;
  font-family: 'p22-underground', sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: ${palette.highlight};
`;

const Logo = () => <LogoLink to="/">Rob Easthope</LogoLink>;

export default Logo;
