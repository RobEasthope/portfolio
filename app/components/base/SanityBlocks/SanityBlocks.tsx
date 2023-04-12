/* eslint-disable @typescript-eslint/restrict-template-expressions */
import dynamic from "next/dynamic";

// Type imports
import { GalleryProps } from "~/components/blocks/Gallery/Gallery";
import { ImageProps } from "~/components/blocks/Image/Image";
import { LandingHeroProps } from "~/components/blocks/LandingHero/LandingHero";
import { MuxVideoProps } from "~/components/blocks/MuxVideo/MuxVideo";
import { SpacerProps } from "~/components/blocks/Spacer/Spacer";
import { TextProps } from "~/components/blocks/Text/Text";
import { VimeoVideoProps } from "~/components/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "~/components/blocks/YoutubeVideo/YoutubeVideo";

// Dynamic component imports
const Gallery = dynamic(() => import("~/components/blocks/Gallery/Gallery"));
const Image = dynamic(() => import("~/components/blocks/Image/Image"));
const LandingHero = dynamic(() => import("~/components/blocks/LandingHero/LandingHero"));
const MuxVideo = dynamic(() => import("~/components/blocks/MuxVideo/MuxVideo"));
const Spacer = dynamic(() => import("~/components/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("~/components/blocks/Text/Text"));
const VimeoVideo = dynamic(() => import("~/components/blocks/VimeoVideo/VimeoVideo"));
const YoutubeVideo = dynamic(() => import("~/components/blocks/YoutubeVideo/YoutubeVideo"));

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
