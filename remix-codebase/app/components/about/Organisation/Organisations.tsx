import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen';

import { Box } from '~/components/_base/Box/Box';
import { ExternalLink } from '~/components/_base/ExternalLink/ExternalLink';
import { Prose } from '~/components/_base/Prose/Prose';
import type { BasicTextProps } from '~/components/_base/Prose/components/BasicText/BasicText';
import { BasicTextComponents } from '~/components/_base/Prose/components/BasicText/BasicText';
import { Type } from '~/components/_base/Type/Type';

export type OrganisationProps = {
  _type: 'organisation';
  _id?: string;
  name?: string;
  url?: string;
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  hiddenOrg?: boolean;
};

export type OrganisationsProps = {
  heading: string;
  description: BasicTextProps;
  organisations: OrganisationProps[];
};

export const Organisations = ({
  heading,
  description,
  organisations,
}: OrganisationsProps) => {
  if (!organisations) return null;

  return (
    <Box as="section" blockSpacing>
      <Box as="div" className="max-w-6xl mx-auto">
        <Type as="h2">{heading}</Type>
        <Prose
          as="div"
          content={description}
          components={BasicTextComponents}
          className="mx-auto mb-2 text-center text-md"
        />
        <Box
          as="ul"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 gap-x-1"
        >
          {organisations?.map((org) => (
            <Box key={org?._id} as="li">
              <ExternalLink href={org?.url || ''}>{org.name}</ExternalLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
