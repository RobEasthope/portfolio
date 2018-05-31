import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoAsset from './saladin-logo-dark-with-diamond.svg';
import palette from '../../styles/colour-palette';

const LogoImage = styled.img`
  height: 40px;
`;

const LogoLink = styled(Link)`
  display: inline-block;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: ${palette.highlight};
`;

const Logo = () => (
  <LogoLink to="/">
    {/* <LogoImage src={LogoAsset} /> */}
    Rob Easthope
  </LogoLink>
);

export default Logo;
