import React from "react";
import PrismicReact from "prismic-reactjs";
import shortid from "shortid";

import SlimWrapper from "../../components/SlimWrapper/SlimWrapper";

const GeneralContentSlice = props => {
  const { slice } = props;
  return (
    <SlimWrapper key={shortid.generate()}>
      {slice.items.map(content => (
        <React.Fragment key={shortid.generate()}>
          {PrismicReact.RichText.render(content.rich_text)}
        </React.Fragment>
      ))}
    </SlimWrapper>
  );
};

export default GeneralContentSlice;
