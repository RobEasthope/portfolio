import dynamic from "next/dynamic";
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

export type RenderSectionsProps = {
  blocks: Record<"_type" | "_key" | string, any>[];
  projects: ProjectProps[];
  pageTitle: string;
};

export const RenderSections = ({ blocks, projects, pageTitle }: RenderSectionsProps) => {
  if (!blocks) {
    return <div>Missing blocks</div>;
  }

  const renderBlocks = () =>
    blocks?.map((block) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { _type } = block;

      switch (_type) {
        case "ExampleSection":
          return (
            <ExampleSection
              {...(block as ExampleSectionProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "Gallery":
          return (
            <Gallery
              {...(block as GalleryProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "Image":
          return (
            <Image
              {...(block as ImageProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "LandingHero":
          return (
            <LandingHero
              {...(block as LandingHeroProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "MuxVideo":
          return (
            <MuxVideo
              {...(block as MuxVideoProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "PageTitle":
          return (
            <PageTitle
              {...(block as PageTitleProps)}
              key={`render-blocks-${block._key as string}`}
              pageTitle={pageTitle}
            />
          );
        case "ProjectIndex":
          return (
            <ProjectIndex
              {...(block as ProjectIndexProps)}
              key={`render-blocks-${block._key as string}`}
              projects={projects}
            />
          );
        case "Spacer":
          return (
            <Spacer
              {...(block as SpacerProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "Text":
          return (
            <Text
              {...(block as TextProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "VimeoVideo":
          return (
            <VimeoVideo
              {...(block as VimeoVideoProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );
        case "YoutubeVideo":
          return (
            <YoutubeVideo
              {...(block as YoutubeVideoProps)}
              key={`render-blocks-${block._key as string}`}
            />
          );

        default:
          return <div key={block?._key as string}>Missing block {block?._type}</div>;
      }
    });

  return <>{renderBlocks()}</>;
};
