import React from 'react';
import { Flex } from 'rebass';

import FooterLink from '../FooterLink/FooterLink';

const Footer = () => (
  <Flex
    as="footer"
    p="4"
    flexDirection="row"
    justifyContent={{ b: 'flex-start', md: 'flex-end' }}
  >
    <FooterLink
      href="mailto:hello@robeasthope.com"
      ml={{ b: '0', md: '2em' }}
      mr={{ b: '2em', md: '0' }}
    >
      hello@robeasthope.com
    </FooterLink>
    <FooterLink
      href="https://www.linkedin.com/in/rob-easthope-9b0bb436/"
      ml={{ b: '0', md: '2em' }}
      mr={{ b: '2em', md: '0' }}
    >
      Linkedin
    </FooterLink>
  </Flex>
);

export default Footer;
