import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";
import { SanitySrcSetImage } from "./components/SanitySrcSetImage/SanitySrcSetImage";

// TYPES
export type ImageAssetProp = {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type SanityImageProps = {
  asset: ImageAssetProp | undefined;
  maxWidth: number;
  alt: string | undefined;
  mode: "responsive" | "cover" | "contain" | "next";
  className?: string;
  wrapperClassName?: string;
  assetClassName?: string;
  containAspectRatio?: number;
  aspectRatio?: number;
};

// MARKUP
export const SanityImage = ({
  asset,
  maxWidth,
  alt,
  mode = "responsive",
  aspectRatio,
  containAspectRatio = 1,
  className = "",
  wrapperClassName = "",
  assetClassName = "",
}: SanityImageProps) => {
  if (!asset) {
    return null;
  }

  switch (mode) {
    case "responsive":
      return (
        <div className={className}>
          <div
            style={{ maxWidth: `${maxWidth}px` }}
            className={`responsive-image-wrapper ${wrapperClassName}`}
          >
            <SanitySrcSetImage
              className={`responsive-image-element ${className} ${assetClassName}`}
              asset={asset}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ""}
            />
          </div>
        </div>
      );

    case "cover":
      return (
        <div
          style={{ maxWidth: `${maxWidth}px` }}
          className={`cover-image-wrapper ${className} ${wrapperClassName}`}
        >
          <SanitySrcSetImage
            className={`cover-image-element ${className} ${assetClassName}`}
            asset={asset}
            maxWidth={maxWidth}
            aspectRatio={aspectRatio}
            alt={alt || ""}
          />
        </div>
      );

    case "contain":
      return (
        <div
          style={{ maxWidth: `${maxWidth}px`, position: "relative" }}
          className={`contain-image-wrapper ${className} ${wrapperClassName}`}
        >
          <div className="contain-image-wrapper">
            <SanitySrcSetImage
              className={`contain-image-element ${className} ${assetClassName}`}
              asset={asset}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ""}
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};
