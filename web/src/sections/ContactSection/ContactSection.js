import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TextWrapper from '../../components/TextWrapper/TextWrapper';
import FooterLink from '../../components/FooterLink/FooterLink';

const ContactSection = ({ title, email, linkedin }) => (
  <Flex
    as="section"
    flexDirection="row"
    flexWrap="wrap"
    py={{ b: 3, md: 4 }}
    px={{ b: 3, md: 4 }}
    justifyContent="flex-end"
  >
    {/* <SectionTitle as="h2" width={1} textAlign={{ b: 'left', md: 'right' }}>
      {title}
    </SectionTitle> */}
    <TextWrapper
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
      textAlign="right"
    >
      <FooterLink
        href={email}
        width={1}
        mb={{ b: '0', md: '2em' }}
        target="_blank"
        rel="noreferrer noopener"
      >
        {email}
      </FooterLink>
      <FooterLink
        href={linkedin}
        width={1}
        mb={{ b: '0', md: '2em' }}
        target="_blank"
        rel="noreferrer noopener"
      >
        Linkedin
      </FooterLink>
    </TextWrapper>
  </Flex>
);

ContactSection.defaultProps = {
  title: '',
};

ContactSection.propTypes = {
  title: PropTypes.string,
};

export default ContactSection;
