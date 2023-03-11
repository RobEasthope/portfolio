import type { ImageAssetProp } from "ui-pkg/base/media/Picture/Picture";
import { createImageUrlBuilder } from "next-sanity";
import { sanityConfig } from "apis-pkg/sanity-api/sanity-config";

export const VectorImage = ({ asset, alt }: { asset: ImageAssetProp; alt: string }) => {
  const imageBuilder = createImageUrlBuilder(sanityConfig);
  const vectorImageUrl: string | null = imageBuilder.image(asset).url();

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={vectorImageUrl || ""} alt={alt || ""} />;
};
