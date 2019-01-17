import React from "react";
import shortid from "shortid";

import GeneralContentSlice from "../../slices/GeneralContentSlice/GeneralContentSlice";
import SlimImageGallery from "../../slices/SlimImageGallery/SlimImageGallery";
import WideImageGallery from "../../slices/WideImageGallery/WideImageGallery";

const AboutBodyContent = props =>
  props.content.map(slice => {
    switch (slice.slice_type) {
      case "general_content":
        return <GeneralContentSlice key={shortid.generate()} slice={slice} />;

      case "slim_image_gallery":
        return <SlimImageGallery key={shortid.generate()} slice={slice} />;

      case "wide_image_gallery":
        return <WideImageGallery key={shortid.generate()} slice={slice} />;

      default:
        return "Untemplated slice";
    }
  });

export default AboutBodyContent;
