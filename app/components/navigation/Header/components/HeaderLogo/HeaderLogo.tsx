import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';

import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import type { AppSettingsProps } from '~/components/settings/AppSettings/AppSettings';

import { Box } from '~/components/base/Box/Box';
import { Image } from '~/components/base/Image/Image';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { Type } from '~/components/base/Type/Type';

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
      <Image
        asset={logo}
        alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
        mode="contain"
        maxWidth={200}
        className="h-1.25 w-1.25"
      />
    </InternalLink>
  </Box>
);
