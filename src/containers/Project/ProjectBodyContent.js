import React from 'react';
import PrismicReact from 'prismic-reactjs';

import { Row, Block } from '../../components/Grid/Grid';

const ProjectBodyContent = props =>
  props.content.map((slice) => {
    switch (slice.slice_type) {
      case 'general_content':
        return slice.items.map(content => (
          <Row>{PrismicReact.RichText.render(content.rich_text)}</Row>
        ));

      case 'image_gallery':
        return (
          <Row>
            {slice.items.map(content => (
              <Block size={1 / 3}>
                <img src={content.image.url} alt={content.image.alt} />
              </Block>
            ))}
          </Row>
        );

      default:
        return 'Slice code missing';
    }
  });

export default ProjectBodyContent;
