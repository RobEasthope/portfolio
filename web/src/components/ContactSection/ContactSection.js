import React from 'react';
import { Flex } from 'rebass';

import SectionTitle from '../SectionTitle/SectionTitle';

const ContactSection = props => {
  const { title } = props;

  return (
    <Flex
      id="contact"
      as="section"
      flexDirection="row"
      flexWrap="wrap"
      px={{ b: 3, md: 4 }}
      justifyContent="flex-end"
    >
      <SectionTitle as="h2" width={1} textAlign={{ b: 'left', md: 'right' }}>
        {title}
      </SectionTitle>
    </Flex>
  );
};

export default ContactSection;
