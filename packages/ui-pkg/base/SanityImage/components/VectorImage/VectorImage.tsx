import type { ImageAssetProp } from "ui-pkg/base/SanityImage/SanityImage";
import { urlFor } from "apis-pkg/sanity/urlFor";

export type VectorImageProps = {
  asset: ImageAssetProp;
  alt: string;
  className?: string;
};

export const VectorImage = ({ asset, alt, className }: VectorImageProps) => {
  const vectorImageUrl: string | null = urlFor(asset).url();

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={vectorImageUrl || ""} alt={alt || ""} className={className} />;
};
