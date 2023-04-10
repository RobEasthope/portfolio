import { MdPodcasts } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiVimeoFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Box } from "ui-pkg/base/Box/Box";
import { ExternalLink } from "ui-pkg/base/ExternalLink/ExternalLink";

export type SocialMediaProps = {
  _type?: "SocialMedia";
  facebook: string | undefined;
  instagram: string | undefined;
  youtube: string | undefined;
  vimeo: string | undefined;
  applePodcasts: string | undefined;
};

export const SocialMedia = ({
  facebook,
  youtube,
  instagram,
  vimeo,
  applePodcasts,
}: SocialMediaProps) => {
  if (!facebook && !youtube && !instagram && !vimeo && !applePodcasts) return null;

  return (
    <Box as="div" className="flex justify-center gap-0.5">
      {facebook && (
        <ExternalLink href={facebook} className="px-0.25">
          <span className="sr-only">Facebook</span>
          <RiFacebookCircleFill className="h-1 w-1" aria-hidden="true" />
        </ExternalLink>
      )}
      {youtube && (
        <ExternalLink href={youtube} className="px-0.25">
          <span className="sr-only">Youtube</span>
          <RiYoutubeFill className="h-1 w-1" aria-hidden="true" />
        </ExternalLink>
      )}
      {instagram && (
        <ExternalLink href={instagram} className="px-0.25">
          <span className="sr-only">Instagram</span>
          <RiInstagramLine className="h-1 w-1" aria-hidden="true" />
        </ExternalLink>
      )}
      {vimeo && (
        <ExternalLink href={vimeo} className="px-0.25">
          <span className="sr-only">Vimeo</span>
          <RiVimeoFill className="h-1 w-1" aria-hidden="true" />
        </ExternalLink>
      )}
      {applePodcasts && (
        <ExternalLink href={applePodcasts} className="px-0.25">
          <span className="sr-only">Podcast</span>
          <MdPodcasts className="h-1 w-1" aria-hidden="true" />
        </ExternalLink>
      )}
    </Box>
  );
};
