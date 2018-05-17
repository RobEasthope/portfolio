import React from 'react';
import PrismicReact from 'prismic-reactjs';

const ProjectBodyContent = props =>
  props.content.map((slice) => {
    switch (slice.slice_type) {
      case 'general_content':
        return slice.items.map(content => (
          <div>{PrismicReact.RichText.render(content.rich_text)}</div>
        ));

      case 'image_gallery':
        return slice.items.map(content => <img src={content.image.url} />);

      default:
        return 'No content';
    }
  });

export default ProjectBodyContent;
