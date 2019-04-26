import React from 'react';
import { Box, Link } from 'rebass';

const Footer = () => (
  <Box as="footer" p="4" alignSelf="flex-end">
    <nav>
      <Link href="mailto:hello@robeasthope.com">hello@robeasthope.com</Link>
      <Link href="https://www.linkedin.com/in/rob-easthope-9b0bb436/">
        Linkedin
      </Link>
    </nav>
  </Box>
);

export default Footer;
