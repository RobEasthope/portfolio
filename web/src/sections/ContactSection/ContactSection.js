import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactSection = ({ sectionId, title }) => (
  <Flex
    id={sectionId}
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

ContactSection.defaultProps = {
  title: '',
};

ContactSection.propTypes = {
  title: PropTypes.string,
};

export default ContactSection;
