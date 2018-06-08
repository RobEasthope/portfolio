import React from 'react';
import PrismicReact from 'prismic-reactjs';

import SlimWrapper from '../SlimWrapper/SlimWrapper';
import Image from '../Image/Image';

const AboutBodyContent = props =>
  props.content.map((slice) => {
    switch (slice.slice_type) {
      case 'general_content':
        return (
          <SlimWrapper>
            {slice.items.map(content => PrismicReact.RichText.render(content.rich_text))}
          </SlimWrapper>
        );

      case 'single_image':
        return (
          <SlimWrapper>{slice.items.map(content => <Image src={content.image} />)}</SlimWrapper>
        );

      default:
        return 'Untemplated slice';
    }
  });

export default AboutBodyContent;
