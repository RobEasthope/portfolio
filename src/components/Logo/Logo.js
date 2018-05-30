import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoAsset from './saladin-logo-dark-with-diamond.svg';

const LogoImage = styled.img`
  height: 40px;
`;

const LogoLink = styled(Link)`
  display: inline-block;
  padding: 0 10px;
`;

const Logo = () => (
  <LogoLink to="/">
    <LogoImage src={LogoAsset} />
  </LogoLink>
);

export default Logo;
