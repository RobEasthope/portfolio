import React from 'react';
import { Flex, Heading } from 'rebass';

const AboutSection = props => {
  const { title } = props;

  return (
    <Flex
      id="portfolio"
      as="section"
      flexDirection="row"
      flexWrap="wrap"
      px="4"
      justifyContent="flex-end"
    >
      <Heading
        as="h2"
        width={1}
        fontSize={{ sm: 5, md: 5, lg: 6, xlg: 7 }}
        textAlign="right"
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default AboutSection;
