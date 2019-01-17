import React from "react";
import PrismicReact from "prismic-reactjs";
import shortid from "shortid";

import { Row, Block } from "../Grid/Grid";
import SlimWrapper from "../SlimWrapper/SlimWrapper";
import WideWrapper from "../WideWrapper/WideWrapper";
import Image from "../Image/Image";

const AboutBodyContent = props =>
  props.content.map(slice => {
    switch (slice.slice_type) {
      case "general_content":
        return (
          <SlimWrapper key={shortid.generate()}>
            {slice.items.map(content => (
              <React.Fragment key={shortid.generate()}>
                {PrismicReact.RichText.render(content.rich_text)}
              </React.Fragment>
            ))}
          </SlimWrapper>
        );

      case "slim_image_gallery":
        return (
          <SlimWrapper key={shortid.generate()}>
            {slice.items.map(content => (
              <Image key={shortid.generate()} src={content.image} />
            ))}
          </SlimWrapper>
        );

      case "wide_image_gallery":
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

      default:
        return "Untemplated slice";
    }
  });

export default AboutBodyContent;
