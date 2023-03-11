import dynamic from "next/dynamic";
// Type imports
import { GalleryProps } from "ui-pkg/sections/Gallery/Gallery";
import { ImageProps } from "ui-pkg/sections/Image/Image";
import { LandingHeroProps } from "ui-pkg/sections/LandingHero/LandingHero";
import { MuxVideoProps } from "ui-pkg/sections/MuxVideo/MuxVideo";
import { PageTitleProps } from "ui-pkg/sections/PageTitle/PageTitle";
import { ProjectIndexProps } from "ui-pkg/sections/ProjectIndex/ProjectIndex";
import { SpacerProps } from "ui-pkg/sections/Spacer/Spacer";
import { TextProps } from "ui-pkg/sections/Text/Text";
import { VimeoVideoProps } from "ui-pkg/sections/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "ui-pkg/sections/YoutubeVideo/YoutubeVideo";
import { ExampleSectionProps } from "ui-pkg/sections/ExampleSection/ExampleSection";
import { ProjectProps } from "ui-pkg/layouts/Project/Project";

// Dynamic component imports
const ExampleSection = dynamic(
  () => import("../../sections/ExampleSection/ExampleSection")
);
const Gallery = dynamic(() => import("ui-pkg/sections/Gallery/Gallery"));
const Image = dynamic(() => import("ui-pkg/sections/Image/Image"));
const LandingHero = dynamic(() => import("ui-pkg/sections/LandingHero/LandingHero"));
const MuxVideo = dynamic(() => import("ui-pkg/sections/MuxVideo/MuxVideo"));
const PageTitle = dynamic(() => import("ui-pkg/sections/PageTitle/PageTitle"));
const ProjectIndex = dynamic(() => import("ui-pkg/sections/ProjectIndex/ProjectIndex"));
const Spacer = dynamic(() => import("ui-pkg/sections/Spacer/Spacer"));
const Text = dynamic(() => import("ui-pkg/sections/Text/Text"));
const VimeoVideo = dynamic(() => import("ui-pkg/sections/VimeoVideo/VimeoVideo"));
const YoutubeVideo = dynamic(() => import("ui-pkg/sections/YoutubeVideo/YoutubeVideo"));

export type RenderSectionsProps = {
  sections: Record<"_type" | "_key" | string, any>[];
  projects: ProjectProps[];
  pageTitle: string;
};

export const RenderSections = ({
  sections,
  projects,
  pageTitle,
}: RenderSectionsProps) => {
  if (!sections) {
    return <div>Missing sections</div>;
  }

  return (
    <>
      {sections?.map((section) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _type } = section;

        switch (_type) {
          case "ExampleSection":
            return (
              <ExampleSection
                {...(section as ExampleSectionProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "Gallery":
            return (
              <Gallery
                {...(section as GalleryProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "Image":
            return (
              <Image
                {...(section as ImageProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "LandingHero":
            return (
              <LandingHero
                {...(section as LandingHeroProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "MuxVideo":
            return (
              <MuxVideo
                {...(section as MuxVideoProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "PageTitle":
            return (
              <PageTitle
                {...(section as PageTitleProps)}
                key={`render-sections-${section._key as string}`}
                pageTitle={pageTitle}
              />
            );
          case "ProjectIndex":
            return (
              <ProjectIndex
                {...(section as ProjectIndexProps)}
                key={`render-sections-${section._key as string}`}
                projects={projects}
              />
            );
          case "Spacer":
            return (
              <Spacer
                {...(section as SpacerProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "Text":
            return (
              <Text
                {...(section as TextProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "VimeoVideo":
            return (
              <VimeoVideo
                {...(section as VimeoVideoProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case "YoutubeVideo":
            return (
              <YoutubeVideo
                {...(section as YoutubeVideoProps)}
                key={`render-sections-${section._key as string}`}
              />
            );

          default:
            return (
              <div key={section?._key as string}>Missing section {section?._type}</div>
            );
        }
      })}
    </>
  );
};
