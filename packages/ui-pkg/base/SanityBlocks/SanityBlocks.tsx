/* eslint-disable @typescript-eslint/restrict-template-expressions */
import dynamic from "next/dynamic";

// Type imports
import { TripCardProps } from "ui-pkg/blocks/TripIndex/components/TripCard/TripCard";
import { BlogCTAProps } from "ui-pkg/blocks/BlogCTA/BlogCTA";
import { BlogIndexProps } from "ui-pkg/blocks/BlogIndex/BlogIndex";
import { CentredCTAProps } from "ui-pkg/blocks/CentredCTA/CentredCTA";
import { CourseIndexProps } from "ui-pkg/blocks/CourseIndex/CourseIndex";
import { CourseHeroProps } from "ui-pkg/blocks/CourseHero/CourseHero";
import { DetailsProps } from "ui-pkg/blocks/Details/Details";
import { GalleryProps } from "ui-pkg/blocks/Gallery/Gallery";
import { HeroProps } from "ui-pkg/blocks/Hero/Hero";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { LandingHeroProps } from "ui-pkg/blocks/LandingHero/LandingHero";
import { MapboxProps } from "ui-pkg/blocks/Mapbox/Mapbox";
import { MuxVideoProps } from "ui-pkg/blocks/MuxVideo/MuxVideo";
import { ProfilesProps } from "ui-pkg/blocks/Profiles/Profiles";
import { QuestionsProps } from "ui-pkg/blocks/Questions/Questions";
import { TestimonialsProps } from "ui-pkg/blocks/Testimonials/Testimonials";
import { SpacerProps } from "ui-pkg/blocks/Spacer/Spacer";
import { TextProps } from "ui-pkg/blocks/Text/Text";
import { TextAndMediaProps } from "ui-pkg/blocks/TextAndMedia/TextAndMedia";
import { VimeoVideoProps } from "ui-pkg/blocks/VimeoVideo/VimeoVideo";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";

// Dynamic component imports
const BlogCTA = dynamic(() => import("ui-pkg/blocks/BlogCTA/BlogCTA"));
const BlogIndex = dynamic(() => import("ui-pkg/blocks/BlogIndex/BlogIndex"));
const CentredCTA = dynamic(() => import("ui-pkg/blocks/CentredCTA/CentredCTA"));
const CourseHero = dynamic(() => import("ui-pkg/blocks/CourseHero/CourseHero"));
const CourseIndex = dynamic(() => import("ui-pkg/blocks/CourseIndex/CourseIndex"));
const Details = dynamic(() => import("ui-pkg/blocks/Details/Details"));
const Gallery = dynamic(() => import("ui-pkg/blocks/Gallery/Gallery"));
const Hero = dynamic(() => import("ui-pkg/blocks/Hero/Hero"));
const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const LandingHero = dynamic(() => import("ui-pkg/blocks/LandingHero/LandingHero"));
const Mapbox = dynamic(() => import("ui-pkg/blocks/Mapbox/Mapbox"));
const MuxVideo = dynamic(() => import("ui-pkg/blocks/MuxVideo/MuxVideo"));
const Profiles = dynamic(() => import("ui-pkg/blocks/Profiles/Profiles"));
const Questions = dynamic(() => import("ui-pkg/blocks/Questions/Questions"));
const Testimonials = dynamic(() => import("ui-pkg/blocks/Testimonials/Testimonials"));
const Spacer = dynamic(() => import("ui-pkg/blocks/Spacer/Spacer"));
const Text = dynamic(() => import("ui-pkg/blocks/Text/Text"));
const TextAndMedia = dynamic(() => import("ui-pkg/blocks/TextAndMedia/TextAndMedia"));
const TripIndex = dynamic(() => import("ui-pkg/blocks/TripIndex/TripIndex"));
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
        case "BlogCTA":
          return (
            <BlogCTA
              {...(block as BlogCTAProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "BlogIndex":
          return (
            <BlogIndex
              {...(block as BlogIndexProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "CentredCTA":
          return (
            <CentredCTA
              {...(block as CentredCTAProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "CourseHero":
          return (
            <CourseHero
              {...(block as CourseHeroProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "CourseIndex":
          return (
            <CourseIndex
              {...(block as CourseIndexProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Details":
          return (
            <Details
              {...(block as DetailsProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Gallery":
          return (
            <Gallery
              {...(block as GalleryProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Hero":
          return (
            <Hero {...(block as HeroProps)} key={`${pageID}-${block._key as string}`} />
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

        case "Mapbox":
          return (
            <Mapbox
              {...(block as MapboxProps)}
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

        case "Profiles":
          return (
            <Profiles
              {...(block as ProfilesProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Questions":
          return (
            <Questions
              {...(block as QuestionsProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "Testimonials":
          return (
            <Testimonials
              {...(block as TestimonialsProps)}
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

        case "TextAndMedia":
          return (
            <TextAndMedia
              {...(block as TextAndMediaProps)}
              key={`${pageID}-${block._key as string}`}
            />
          );

        case "TripIndex":
          return (
            <TripIndex
              {...(block as TripCardProps)}
              _type={block?._type as "TripIndex"}
              key={`${pageID}-${block._key as string}`}
            />
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
