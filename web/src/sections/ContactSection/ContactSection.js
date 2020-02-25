import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import TextWrapper from '../../components/TextWrapper/TextWrapper';
import ProjectText from '../../components/ProjectText/ProjectText';
import FooterLink from '../../components/FooterLink/FooterLink';

const ContactSection = ({ email, linkedin }) => (
  <Flex
    as="section"
    flexDirection="row"
    flexWrap="wrap"
    ml={{ b: 0, md: 4 }}
    pt={{ b: 3, md: '3em' }}
    px={{ b: 3, md: 4 }}
    justifyContent="flex-end"
  >
    <TextWrapper
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      <ProjectText>
        If you want to work together on a project or are looking for some
        technical advice, get in touch.
      </ProjectText>
      <FooterLink
        href={`mailto:${email}`}
        width={1}
        mt={{ b: '0', md: '2em' }}
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
  email: '',
  linkedin: '',
};

ContactSection.propTypes = {
  email: PropTypes.string,
  linkedin: PropTypes.string,
};

export default ContactSection;
