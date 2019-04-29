import React from 'react';
import { Box } from 'rebass';

import FooterLink from '../FooterLink/FooterLink';

const Footer = () => (
  <Box as="footer" p="4" alignSelf="flex-end">
    <nav>
      <FooterLink href="mailto:hello@robeasthope.com">
        hello@robeasthope.com
      </FooterLink>
      <FooterLink href="https://www.linkedin.com/in/rob-easthope-9b0bb436/">
        Linkedin
      </FooterLink>
    </nav>
  </Box>
);

export default Footer;
