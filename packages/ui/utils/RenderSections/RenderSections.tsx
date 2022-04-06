import dynamic from 'next/dynamic';
// Type imports
import { GalleryProps } from '@/UI/sections/Gallery/Gallery';
import { ImageProps } from '@/UI/sections/Image/Image';
import { LandingHeroProps } from '@/UI/sections/LandingHero/LandingHero';
import { MuxVideoProps } from '@/UI/sections/MuxVideo/MuxVideo';
import { TextProps } from '@/UI/sections/Text/Text';
import { ProjectIndexProps } from '@/UI/sections/ProjectIndex/ProjectIndex';
import { VimeoVideoProps } from '@/UI/sections/VimeoVideo/VimeoVideo';
import { YoutubeVideoProps } from '@/UI/sections/YoutubeVideo/YoutubeVideo';
import { ExampleSectionProps } from '@/UI/sections/ExampleSection/ExampleSection';
import { ProjectProps } from 'layouts/Project/Project';

// Dynamic component imports
const ExampleSection = dynamic(
  () => import('../../sections/ExampleSection/ExampleSection')
);
const Gallery = dynamic(() => import('@/UI/sections/Gallery/Gallery'));
const Image = dynamic(() => import('@/UI/sections/Image/Image'));
const LandingHero = dynamic(
  () => import('@/UI/sections/LandingHero/LandingHero')
);
const MuxVideo = dynamic(() => import('@/UI/sections/MuxVideo/MuxVideo'));
const ProjectIndex = dynamic(
  () => import('@/UI/sections/ProjectIndex/ProjectIndex')
);
const Text = dynamic(() => import('@/UI/sections/Text/Text'));
const VimeoVideo = dynamic(() => import('@/UI/sections/VimeoVideo/VimeoVideo'));
const YoutubeVideo = dynamic(
  () => import('@/UI/sections/YoutubeVideo/YoutubeVideo')
);

export type RenderSectionsProps = {
  sections: Record<'_type' | '_key' | string, any>[];
  projects: ProjectProps[];
};

export const RenderSections = ({ sections, projects }: RenderSectionsProps) => {
  if (!sections) {
    return <div>Missing sections</div>;
  }

  return (
    <>
      {sections?.map((section) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _type } = section;

        switch (_type) {
          case 'ExampleSection':
            return (
              <ExampleSection
                {...(section as ExampleSectionProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'Gallery':
            return (
              <Gallery
                {...(section as GalleryProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'Image':
            return (
              <Image
                {...(section as ImageProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'LandingHero':
            return (
              <LandingHero
                {...(section as LandingHeroProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'MuxVideo':
            return (
              <MuxVideo
                {...(section as MuxVideoProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'ProjectIndex':
            return (
              <ProjectIndex
                {...(section as ProjectIndexProps)}
                key={`render-sections-${section._key as string}`}
                projects={projects}
              />
            );
          case 'Text':
            return (
              <Text
                {...(section as TextProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'VimeoVideo':
            return (
              <VimeoVideo
                {...(section as VimeoVideoProps)}
                key={`render-sections-${section._key as string}`}
              />
            );
          case 'YoutubeVideo':
            return (
              <YoutubeVideo
                {...(section as YoutubeVideoProps)}
                key={`render-sections-${section._key as string}`}
              />
            );

          default:
            return (
              <div key={section?._key as string}>
                Missing section {section?._type}
              </div>
            );
        }
      })}
    </>
  );
};
