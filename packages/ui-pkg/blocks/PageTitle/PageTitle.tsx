import { MaxWidth } from "ui-pkg/base/structure/MaxWidth/MaxWidth";
import { PageTitle as rawPageTitleProps } from "ui-pkg/types/sanity-schema";
import { PaddedComponent } from "ui-pkg/base/structure/PaddedComponent/PaddedComponent";
import { Text } from "ui-pkg/base/typography/Text/Text";
import { TextAlign } from "ui-pkg/base/structure/TextAlign/TextAlign";
import { styled } from "ui-pkg/styles/stitches.config";
import { Spacer } from "ui-pkg/blocks/Spacer/Spacer";

// STYLES
export const Break = styled("span", {
  display: "block",
  width: "$x2",
  height: "2px",
  marginX: "auto",
  backgroundColor: "$darkSaffron",
});

// TYPES
export interface PageTitleProps extends rawPageTitleProps {
  heading: string;
}

export const PageTitle = ({ heading }: PageTitleProps) => {
  if (!heading) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="text">
      <MaxWidth width="page">
        <TextAlign align="centre">
          <Text typeSize="medium">{heading}</Text>

          <Spacer height="x1" />
          <Break />
          <Spacer height="x2" />
        </TextAlign>
      </MaxWidth>
    </PaddedComponent>
  );
};

export default PageTitle;
