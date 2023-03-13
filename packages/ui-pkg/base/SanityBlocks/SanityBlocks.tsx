/* eslint-disable @typescript-eslint/restrict-template-expressions */
import dynamic from "next/dynamic";
import { Box } from "ui-pkg/base/Box/Box";

// Type imports
import { GalleryProps } from "ui-pkg/blocks/Gallery/Gallery";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { LandingHeroProps } from "ui-pkg/blocks/LandingHero/LandingHero";
import { MuxVideoProps } from "ui-pkg/blocks/MuxVideo/MuxVideo";
import { PageTitleProps } from "ui-pkg/blocks/PageTitle/PageTitle";
import { ProjectIndexProps } from "ui-pkg/blocks/ProjectIndex/ProjectIndex";
import { SpacerProps } from "ui-pkg/blocks/Spacer/Spacer";
import { TextProps } from "ui-pkg/blocks/Text/Text";
import { VimeoVideoProps } from "ui-pkg/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";
import { ExampleSectionProps } from "ui-pkg/blocks/ExampleSection/ExampleSection";
import { ProjectProps } from "ui-pkg/pages/Project/Project";

// Dynamic component imports
const ExampleSection = dynamic(
  () => import("ui-pkg/blocks/ExampleSection/ExampleSection")
);
const Gallery = dynamic(() => import("ui-pkg/blocks/Gallery/Gallery"));
const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const LandingHero = dynamic(() => import("ui-pkg/blocks/LandingHero/LandingHero"));
const MuxVideo = dynamic(() => import("ui-pkg/blocks/MuxVideo/MuxVideo"));
const PageTitle = dynamic(() => import("ui-pkg/blocks/PageTitle/PageTitle"));
const ProjectIndex = dynamic(() => import("ui-pkg/blocks/ProjectIndex/ProjectIndex"));
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
    blocks?.map((section, i) => {
      switch (section?._type) {
        case "ExampleSection":
          return (
            <ExampleSection
              {...(section as ExampleSectionProps)}
              key={`${pageID}-${section._key}`}
            />
          );

        case "Gallery":
          return (
            <Gallery {...(section as GalleryProps)} key={`${pageID}-${section._key}`} />
          );

        case "Image":
          return <Image {...(section as ImageProps)} key={`${pageID}-${section._key}`} />;

        case "LandingHero":
          return (
            <LandingHero
              {...(section as LandingHeroProps)}
              key={`${pageID}-${section._key}`}
            />
          );

        case "MuxVideo":
          return (
            <MuxVideo {...(section as MuxVideoProps)} key={`${pageID}-${section._key}`} />
          );

        case "PageTitle":
          return (
            <PageTitle
              {...(section as PageTitleProps)}
              key={`${pageID}-${section._key}`}
              pageTitle={pageTitle}
            />
          );

        case "ProjectIndex":
          return (
            <ProjectIndex
              {...(section as ProjectIndexProps)}
              key={`${pageID}-${section._key}`}
              projects={projects}
            />
          );

        case "Spacer":
          return (
            <Spacer {...(section as SpacerProps)} key={`${pageID}-${section._key}`} />
          );

        case "Text":
          return <Text {...(section as TextProps)} key={`${pageID}-${section._key}`} />;

        case "VimeoVideo":
          return (
            <VimeoVideo
              {...(section as VimeoVideoProps)}
              key={`${pageID}-${section._key}`}
            />
          );
        case "YoutubeVideo":
          return (
            <YoutubeVideo
              {...(section as YoutubeVideoProps)}
              key={`${pageID}-${section._key}`}
            />
          );

        default:
          return (
            <div key={`${pageID}-${section._key}`}>Missing section {section?._type}</div>
          );
      }
    });

  return <>{renderBlocks()}</>;
};
