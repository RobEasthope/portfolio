/* eslint-disable @typescript-eslint/restrict-template-expressions */
import dynamic from "next/dynamic";
import { Box } from "ui-pkg/base/Box/Box";

// Type imports
import { CareersProps } from "ui-pkg/blocks/Careers/Careers";
import { HoldingTextProps } from "ui-pkg/pages/HoldingPage/components/HoldingText/HoldingText";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { LargeTitleHeroProps } from "ui-pkg/blocks/LargeTitleHero/LargeTitleHero";
import { LargeTitleMultipleImagesProps } from "ui-pkg/blocks/LargeTitleMultipleImages/LargeTitleMultipleImages";
import { LogoHeroProps } from "ui-pkg/blocks/LogoHero/LogoHero";
import { MediaCentreProps } from "ui-pkg/blocks/MediaCentre/MediaCentre";
import { NewsArticleIndexProps } from "ui-pkg/blocks/NewsArticleIndex/NewsArticleIndex";
import { PageHeroProps } from "ui-pkg/blocks/PageHero/PageHero";
import { ProfilesProps } from "ui-pkg/blocks/Profiles/Profiles";
import { SDGHeroProps } from "ui-pkg/blocks/SDGHero/SDGHero";
import { SDGIndexProps } from "ui-pkg/blocks/SDGIndex/SDGIndex";
import { SDGIndexLargeProps } from "ui-pkg/blocks/SDGIndexLarge/SDGIndexLarge";
import { SmallTitleAndGlobeProps } from "ui-pkg/blocks/SmallTitleAndGlobe/SmallTitleAndGlobe";
import { SpacerProps } from "ui-pkg/blocks/Spacer/Spacer";
import { TextProps } from "ui-pkg/blocks/Text/Text";
import { TextAndImageProps } from "ui-pkg/blocks/TextAndImage/TextAndImage";
import { TimelineProps } from "ui-pkg/blocks/Timeline/Timeline";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";

// Dynamic component imports
const Careers = dynamic(() => import("ui-pkg/blocks/Careers/Careers"));
const HoldingText = dynamic(
  () => import("ui-pkg/pages/HoldingPage/components/HoldingText/HoldingText")
);
const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const LargeTitleHero = dynamic(
  () => import("ui-pkg/blocks/LargeTitleHero/LargeTitleHero")
);
const LargeTitleMultipleImages = dynamic(
  () => import("ui-pkg/blocks/LargeTitleMultipleImages/LargeTitleMultipleImages")
);
const LogoHero = dynamic(() => import("ui-pkg/blocks/LogoHero/LogoHero"));
const MediaCentre = dynamic(() => import("ui-pkg/blocks/MediaCentre/MediaCentre"));
const NewsArticleIndex = dynamic(
  () => import("ui-pkg/blocks/NewsArticleIndex/NewsArticleIndex")
);
const PageHero = dynamic(() => import("ui-pkg/blocks/PageHero/PageHero"));
const Profiles = dynamic(() => import("ui-pkg/blocks/Profiles/Profiles"));
const SDGHero = dynamic(() => import("ui-pkg/blocks/SDGHero/SDGHero"));
const SDGIndex = dynamic(() => import("ui-pkg/blocks/SDGIndex/SDGIndex"));
const SDGIndexLarge = dynamic(() => import("ui-pkg/blocks/SDGIndexLarge/SDGIndexLarge"));
const SmallTitleAndGlobe = dynamic(
  () => import("ui-pkg/blocks/SmallTitleAndGlobe/SmallTitleAndGlobe")
);
const Spacer = dynamic(() => import("ui-pkg/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("ui-pkg/blocks/Text/Text"));
const TextAndImage = dynamic(() => import("ui-pkg/blocks/TextAndImage/TextAndImage"));
const Timeline = dynamic(() => import("ui-pkg/blocks/Timeline/Timeline"));
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
    blocks?.map((section, i) => {
      switch (section?._type) {
        case "Careers":
          return (
            <Careers
              {...(section as CareersProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "HoldingText":
          return (
            <HoldingText
              {...(section as HoldingTextProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "Image":
          return (
            <Box
              as="div"
              className="px-4 md:px-12"
              key={`${section?._key as string}-${pageID}`}
            >
              <Image {...(section as ImageProps)} />
            </Box>
          );

        case "LargeTitleHero":
          return (
            <LargeTitleHero
              {...(section as LargeTitleHeroProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "LargeTitleMultipleImages":
          return (
            <LargeTitleMultipleImages
              {...(section as LargeTitleMultipleImagesProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "LogoHero":
          return (
            <LogoHero
              {...(section as LogoHeroProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "MediaCentre":
          return (
            <MediaCentre
              {...(section as MediaCentreProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "NewsArticleIndex":
          return (
            <NewsArticleIndex
              {...(section as NewsArticleIndexProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "PageHero":
          return (
            <PageHero
              {...(section as PageHeroProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "Profiles":
          return (
            <Profiles
              {...(section as ProfilesProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "SDGHero":
          return (
            <SDGHero
              {...(section as SDGHeroProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "SDGIndex":
          return (
            <SDGIndex
              {...(section as SDGIndexProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "SDGIndexLarge":
          return (
            <SDGIndexLarge
              {...(section as SDGIndexLargeProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "SmallTitleAndGlobe":
          return (
            <SmallTitleAndGlobe
              {...(section as SmallTitleAndGlobeProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "Spacer":
          return (
            <Spacer
              {...(section as SpacerProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "Text":
          return (
            <Text
              {...(section as TextProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "TextAndImage":
          return (
            <TextAndImage
              {...(section as TextAndImageProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "Timeline":
          return (
            <Timeline
              {...(section as TimelineProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        case "YoutubeVideo":
          return (
            <YoutubeVideo
              {...(section as YoutubeVideoProps)}
              key={`${section?._key as string}-${pageID}`}
            />
          );

        default:
          return (
            <Box
              as="div"
              key={`${i}-${section?._type as string}-${pageID}`}
              className="border border-red-600 bg-white text-center text-red-600"
            >
              Block {section?._type} is missing from the render index
            </Box>
          );
      }
    });

  return <>{renderBlocks()}</>;
};
