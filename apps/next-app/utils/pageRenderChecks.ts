import { PageProps } from "ui-pkg/layouts/Page/Page";
import { AppGlobalsProps } from "ui-pkg/base/settings/Globals";

export const pageRenderChecks = (props: {
  data: {
    page: PageProps;
    globals: AppGlobalsProps;
  };
  currentRoute: string;
}): boolean => {
  const page = props?.data?.page;
  const currentRoute: string = props?.currentRoute;
  const pageSlug: string = props?.data?.page?.slug?.current;
  const homePageSlug: string = props?.data?.globals?.settings.homePageSlug;

  // No page data at all
  if (page === null) {
    return false;
  }

  // Don't render homepage if we're not at the root path
  if (currentRoute !== "/" && pageSlug === homePageSlug) {
    return false;
  }

  // Render home page if the root path is active and valid home page slug is valid
  if (currentRoute === "/" && pageSlug === homePageSlug) {
    return true;
  }

  // Green light
  return true;
};
