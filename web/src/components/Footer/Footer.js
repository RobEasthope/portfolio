import React from 'react';
import { Flex } from 'rebass';

import FooterText from '../FooterText/FooterText';

const CurrentYear = new Date().getUTCFullYear();

const Footer = () => (
  <Flex
    as="footer"
    width={1}
    pl="3"
    pr="4"
    pt={6}
    pb="48px"
    flexDirection="row"
    justifyContent={{ b: 'flex-start', md: 'flex-end' }}
  >
    <FooterText ml={{ b: '0', md: '2em' }} mr={{ b: '2em', md: '0' }}>
      © {CurrentYear} Rob Easthope. All right reserved.
    </FooterText>
  </Flex>
);

export default Footer;
