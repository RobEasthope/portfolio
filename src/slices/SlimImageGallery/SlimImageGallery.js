import React from "react";
import shortid from "shortid";

import SlimWrapper from "../../components/SlimWrapper/SlimWrapper";
import Image from "../../components/Image/Image";

const SlimImageGallery = props => {
  const { slice } = props;

  return (
    <SlimWrapper key={shortid.generate()}>
      {slice.items.map(content => (
        <Image key={shortid.generate()} src={content.image} />
      ))}
    </SlimWrapper>
  );
};

export default SlimImageGallery;
