import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';
import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { Type } from '~/components/base/Type/Type';

import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

export type HeaderLogoProps = {
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    attribution?: string;
  };
};

export const HeaderLogo = ({ logo }: HeaderLogoProps) => (
  <Box
    as="div"
    className="absolute left-1/2 flex flex-1 -translate-x-1/2 items-center justify-center"
  >
    <InternalLink href={HOME_PAGE_SLUG}>
      <Type as="span" className="sr-only">
        {METADATA_HARD_CODED_FALLBACKS.TITLE}
      </Type>
      <SanityImage
        asset={logo}
        alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
        mode="contain"
        maxWidth={200}
        className="h-1.25"
      />
    </InternalLink>
  </Box>
);
