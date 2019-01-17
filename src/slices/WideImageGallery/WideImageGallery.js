import React from "react";
import shortid from "shortid";

import WideWrapper from "../../components/WideWrapper/WideWrapper";
import Image from "../../components/Image/Image";
import { Row, Block } from "../../components/Grid/Grid";

const WideImageGallery = props => {
  const { slice } = props;

  return (
    <WideWrapper key={shortid.generate()}>
      <Row>
        {slice.items.map(content => (
          <Block key={shortid.generate()} size={1 / 1}>
            <Image src={content.image} />
          </Block>
        ))}
      </Row>
    </WideWrapper>
  );
};

export default WideImageGallery;
