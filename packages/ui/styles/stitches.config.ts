import { createStitches } from '@stitches/react';
import { mixins } from 'stitches-mixins';

import { SizeProps, TypeProps, FullTypeProps } from '~/UI/types/utils';
import { type } from '~/UI/styles/utils/type';
import { fullType } from '~/UI/styles/utils/fullType';
import { size } from '~/UI/styles/utils/size';
import { MAX_WIDTH } from '~/UI/constants/MAX_WIDTHS';
import { SPACING } from '~/UI/constants/SPACING';
import { RADII } from '~/UI/styles/constants/RADII';

export const { css, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      text: 'rgb(21, 23, 24)',
      saffron: 'rgba(255, 153, 51, 1)',
      darkSaffron: 'rgba(250, 145, 46, 1)',
      imperialRed: 'rgb(170, 0, 0)',
      japaneseRed: 'rgb(193, 78, 95)',
      highlight: '$saffron',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',

      purple100: 'hsl(252,100%,99%)',
      purple200: 'hsl(252,100%,98%)',
      purple300: 'hsl(252,100%,94%)',
      purple400: 'hsl(252,75%,84%)',
      purple500: 'hsl(252,78%,60%)',
      purple600: 'hsl(252,80%,53%)',
    },
    space: {
      ...SPACING,
    },
    sizes: {
      ...SPACING,
    },
    fontSizes: {},
    fonts: {
      system: 'system-ui',
      serif: 'plantin, sans-serif',
      sansSerif: 'adelle-sans, sans-serif',
    },
    radii: {
      ...RADII,
    },
  },
  utils: {
    include: mixins(),
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    xySize: (value: string | number) => ({
      width: value,
      height: value,
    }),
    type: ({ fontSize }: TypeProps) =>
      type({
        fontSize,
      }),
    fullType: ({
      fontSize,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
    }: FullTypeProps) =>
      fullType({
        fontSize,
        mt,
        mr,
        mb,
        ml,
        mx,
        my,
        pt,
        pr,
        pb,
        pl,
        px,
        py,
      }),
    size: ({ selector, min, max }: SizeProps) => size({ selector, min, max }),
  },
  media: {
    xSmall: '(min-width: 420px)',
    small: '(min-width: 640px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1024px)',
    xLarge: '(min-width: 1280px)',
    xxLarge: '(min-width: 1536px)',
    pageMinWidth: `(min-width: ${MAX_WIDTH.TYPE_LOWER_LIMIT}px)`,
    pageMaxWidth: `(min-width: ${MAX_WIDTH.TYPE_UPPER_LIMIT}px)`,
  },
});
