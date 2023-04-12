import dynamic from "next/dynamic";
// Type imports
import { GalleryProps } from "~/components/blocks/Gallery/Gallery";
import { ImageProps } from "~/components/blocks/Image/Image";
import { LandingHeroProps } from "~/components/blocks/LandingHero/LandingHero";
import { MuxVideoProps } from "~/components/blocks/MuxVideo/MuxVideo";
import { PageTitleProps } from "~/components/blocks/PageTitle/PageTitle";
import { ProjectIndexProps } from "~/components/blocks/ProjectIndex/ProjectIndex";
import { SpacerProps } from "~/components/blocks/Spacer/Spacer";
import { TextProps } from "~/components/blocks/Text/Text";
import { VimeoVideoProps } from "~/components/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "~/components/blocks/YoutubeVideo/YoutubeVideo";
import { ProjectProps } from "~/components/pages/Project/Project";

// Dynamic component imports
const Gallery = dynamic(() => import("~/components/blocks/Gallery/Gallery"));
const Image = dynamic(() => import("~/components/blocks/Image/Image"));
const LandingHero = dynamic(() => import("~/components/blocks/LandingHero/LandingHero"));
const MuxVideo = dynamic(() => import("~/components/blocks/MuxVideo/MuxVideo"));
const PageTitle = dynamic(() => import("~/components/blocks/PageTitle/PageTitle"));
const ProjectIndex = dynamic(() => import("~/components/blocks/ProjectIndex/ProjectIndex"));
const Spacer = dynamic(() => import("~/components/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("~/components/blocks/Text/Text"));
const VimeoVideo = dynamic(() => import("~/components/blocks/VimeoVideo/VimeoVideo"));
const YoutubeVideo = dynamic(() => import("~/components/blocks/YoutubeVideo/YoutubeVideo"));

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
