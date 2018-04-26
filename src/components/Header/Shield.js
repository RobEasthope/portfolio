import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import shieldAsset from './Shield (white bkg).svg';

const ShieldLogo = styled.img`
  height: 40px;
`;

const ShieldLink = styled(Link)`
  display: inline-block;
`;

const Shield = () => (
  <ShieldLink to="/">
    <ShieldLogo src={shieldAsset} />
  </ShieldLink>
);

export default Shield;
