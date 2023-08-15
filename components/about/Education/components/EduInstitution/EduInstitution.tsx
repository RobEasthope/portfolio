import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { Box } from 'components/_base/Box/Box';
import { ExternalLink } from 'components/_base/ExternalLink/ExternalLink';
import { Prose } from 'components/_base/Prose/Prose';
import { BasicTextComponents } from 'components/_base/Prose/components/BasicText/BasicText';
import { Type } from 'components/_base/Type/Type';

import { GigDate } from 'components/about/GigIndex/components/Gig/GigDate';

export type EduInstitutionProps = {
  _type?: 'EduInstitution';
  _id?: string;
  name: string;
  url: string;
  qualification: string;
  startDate: string;
  endDate: string;
  logo: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export const EduInstitution = ({
  name,
  url,
  qualification,
  startDate,
  endDate,
  logo,
}: EduInstitutionProps) => (
  <Box as="article">
    <ExternalLink href={url} className="font-bold">
      {name} / {qualification}
    </ExternalLink>
    <GigDate startDate={startDate} endDate={endDate} />
  </Box>
);
