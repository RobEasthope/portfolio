import React from 'react';
import PrismicReact from 'prismic-reactjs';

import { Row, Block } from '../Grid/Grid';
import TextWrapper from '../TextWrapper/TextWrapper';
import Image from '../Image/Image';

const ProjectBodyContent = props =>
  props.content.map((slice) => {
    switch (slice.slice_type) {
      case 'general_content':
        return (
          <TextWrapper>
            {slice.items.map(content => PrismicReact.RichText.render(content.rich_text))}
          </TextWrapper>
        );

      case 'image_gallery':
        return (
          <Row>
            {slice.items.map(content => (
              <Block size={1 / 1}>
                <Image src={content.image} />
              </Block>
            ))}
          </Row>
        );

      default:
        return 'Slice code missing';
    }
  });

export default ProjectBodyContent;
