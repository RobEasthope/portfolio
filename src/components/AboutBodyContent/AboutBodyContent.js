import React from 'react';
import PrismicReact from 'prismic-reactjs';

const AboutBodyContent = props =>
  props.content.map((slice) => {
    switch (slice.slice_type) {
      case 'general_content':
      case 'rich_text':
        return slice.items.map(content => (
          <div>{PrismicReact.RichText.render(content.rich_text)}</div>
        ));

      default:
        return 'No content';
    }
  });

export default AboutBodyContent;
