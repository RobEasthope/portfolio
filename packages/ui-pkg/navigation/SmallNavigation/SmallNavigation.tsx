import { RiMenuLine } from "react-icons/ri";
import * as DialogPrimative from "@radix-ui/react-dialog";
import { styled } from "ui-pkg/styles/stitches.config";
import { Header as rawHeaderProps } from "ui-pkg/types/sanity-schema";

import { SuperLink } from "ui-pkg/base/links/SuperLink/SuperLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/links/InternalLink/InternalLink";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/links/ExternalLink/ExternalLink";
import { HeaderProps } from "ui-pkg/navigation/Header/Header";

// Styles
export const DialogContent = styled(DialogPrimative.Content, {
  backgroundColor: "white",

  width: "300px",
  height: "100vh",

  borderRight: "1px solid black",
});

export const DialogOverlay = styled(DialogPrimative.Overlay, {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  width: "100vw",
  height: "100vh",
});

export const OpenSmallNavigationButton = styled(DialogPrimative.Trigger, {
  border: "none",

  "@media (min-width: 800px)": {
    display: "none",
    visibility: "hidden",
  },
});

export const CloseSmallNavigationButton = styled(DialogPrimative.Close, {
  border: "none",
});

// Types
export interface SmallNavigationProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleSchemaProps, InternalLinkWithTitleSchemaProps];
}

// Markup
export const SmallNavigation = ({
  navigationLeft,
  navigationRight,
}: Pick<HeaderProps, "navigationLeft" | "navigationRight">) => (
  <DialogPrimative.Root>
    <OpenSmallNavigationButton>
      <RiMenuLine />
    </OpenSmallNavigationButton>

    <DialogOverlay />

    <DialogContent>
      <CloseSmallNavigationButton>Close</CloseSmallNavigationButton>

      <nav>
        <ul>
          {navigationLeft &&
            navigationLeft?.length > 0 &&
            navigationLeft.map((nav) => (
              <li key={nav?._key} className="link">
                <SuperLink className="" link={nav}>
                  {nav.title}
                </SuperLink>
              </li>
            ))}
          {navigationRight &&
            navigationRight?.length > 0 &&
            navigationRight.map((nav) => (
              <li key={nav?._key} className="link">
                <SuperLink className="" link={nav}>
                  {nav.title}
                </SuperLink>
              </li>
            ))}
        </ul>
      </nav>
    </DialogContent>
  </DialogPrimative.Root>
);
