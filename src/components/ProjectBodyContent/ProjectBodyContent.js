import React from 'react';
import PrismicReact from 'prismic-reactjs';

import { Row, Block } from '../Grid/Grid';
import SlimWrapper from '../SlimWrapper/SlimWrapper';
import WideWrapper from '../WideWrapper/WideWrapper';
import Image from '../Image/Image';

const ProjectBodyContent = props =>
  props.content.map((slice) => {
    switch (slice.slice_type) {
      case 'general_content':
        return (
          <SlimWrapper>
            {slice.items.map(content => PrismicReact.RichText.render(content.rich_text))}
          </SlimWrapper>
        );

      case 'image_gallery':
        return (
          <WideWrapper>
            <Row>
              {slice.items.map(content => (
                <Block size={1 / 1}>
                  <Image src={content.image} />
                </Block>
              ))}
            </Row>
          </WideWrapper>
        );

      default:
        return 'Slice code missing';
    }
  });

export default ProjectBodyContent;
