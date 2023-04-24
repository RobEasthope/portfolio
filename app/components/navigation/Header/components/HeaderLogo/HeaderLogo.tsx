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

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';

export type HeaderLogoProps = {
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
  };
  homePageSlug: AppSettingsProps['homePageSlug'];
};

export const HeaderLogo = ({ logo, homePageSlug }: HeaderLogoProps) => (
  <Box
    as="div"
    className="absolute left-1/2 flex flex-1 -translate-x-1/2 items-center justify-center"
  >
    <InternalLink
      href={homePageSlug}
      className="p-0.25"
      homePageSlug={homePageSlug}
    >
      <Type as="span" className="sr-only">
        {METADATA_HARD_CODED_FALLBACKS.TITLE}
      </Type>
      <SanityImage
        asset={logo}
        alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
        mode="contain"
        maxWidth={200}
        className="h-1.25 w-1.25"
      />
    </InternalLink>
  </Box>
);
