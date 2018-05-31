import React from 'react';
import PrismicReact from 'prismic-reactjs';
import Imgix from 'react-imgix';

import { Row, Block } from '../Grid/Grid';
import TextWrapper from '../TextWrapper/TextWrapper';

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
                <Imgix src={content.image.url} alt={content.image.alt} />
              </Block>
            ))}
          </Row>
        );

      default:
        return 'Slice code missing';
    }
  });

export default ProjectBodyContent;
