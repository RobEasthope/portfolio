/* eslint-disable @typescript-eslint/restrict-template-expressions */
import dynamic from "next/dynamic";

// Type imports
import { GalleryProps } from "ui-pkg/blocks/Gallery/Gallery";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { LandingHeroProps } from "ui-pkg/blocks/LandingHero/LandingHero";
import { MuxVideoProps } from "ui-pkg/blocks/MuxVideo/MuxVideo";
import { SpacerProps } from "ui-pkg/blocks/Spacer/Spacer";
import { TextProps } from "ui-pkg/blocks/Text/Text";
import { VimeoVideoProps } from "ui-pkg/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";

// Dynamic component imports
const Gallery = dynamic(() => import("ui-pkg/blocks/Gallery/Gallery"));
const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const LandingHero = dynamic(() => import("ui-pkg/blocks/LandingHero/LandingHero"));
const MuxVideo = dynamic(() => import("ui-pkg/blocks/MuxVideo/MuxVideo"));
const Spacer = dynamic(() => import("ui-pkg/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("ui-pkg/blocks/Text/Text"));
const VimeoVideo = dynamic(() => import("ui-pkg/blocks/VimeoVideo/VimeoVideo"));
const YoutubeVideo = dynamic(() => import("ui-pkg/blocks/YoutubeVideo/YoutubeVideo"));

// TYPES
export type SanityBlocksProps = {
  blocks: Record<"_type" | "_key" | string, any>[];
  pageID: string;
};

// MARKUP
export const SanityBlocks = ({ blocks, pageID }: SanityBlocksProps) => {
  if (!blocks || blocks?.length <= 0) return null;

  const renderBlocks = () =>
    blocks?.map((block, i) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { _type } = block;

      if (!block?._type) {
        return <div key={`${pageID}-${i}`}>Block query missing</div>;
      }

      switch (_type) {
        case "Gallery":
          return (
            <Gallery
              {...(block as GalleryProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Image":
          return (
            <Image {...(block as ImageProps)} key={`${pageID}-${block._key as string}`} />
          );

        case "LandingHero":
          return (
            <LandingHero
              {...(block as LandingHeroProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "MuxVideo":
          return (
            <MuxVideo
              {...(block as MuxVideoProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Spacer":
          return (
            <Spacer
              {...(block as SpacerProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Text":
          return (
            <Text {...(block as TextProps)} key={`${pageID}-${block._key as string}`} />
          );

        case "VimeoVideo":
          return (
            <VimeoVideo
              {...(block as VimeoVideoProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "YoutubeVideo":
          return (
            <YoutubeVideo
              {...(block as YoutubeVideoProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        default:
          return <div key={block?._key as string}>Missing block {block?._type}</div>;
      }
    });

  return <>{renderBlocks()}</>;
};
