import { createStitches } from '@stitches/react';
import { mixins } from 'stitches-mixins';

import { SizeProps, TypeProps, FullTypeProps } from '@/UI/types/utils';
import { type } from '@/UI/styles/utils/type';
import { fullType } from '@/UI/styles/utils/fullType';
import { size } from '@/UI/styles/utils/size';
import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';
import { SPACING } from '@/UI/constants/SPACING';

export const { css, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

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
      quarter: `calc(${SPACING.VR_BASE} / 4)`,
      third: `calc(${SPACING.VR_BASE} / 3)`,
      twoThirds: `calc(${SPACING.VR_BASE} * 0.666)`,
      half: `calc(${SPACING.VR_BASE} / 2)`,
      x1: SPACING.VR_BASE,
      x2: `calc(${SPACING.VR_BASE} * 2)`,
      x3: `calc(${SPACING.VR_BASE} * 3)`,
      x4: `calc(${SPACING.VR_BASE} * 4)`,
      x5: `calc(${SPACING.VR_BASE} * 5)`,
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      system: 'system-ui',
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
