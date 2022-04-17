import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { styled } from '~/UI/styles/stitches.config';

export const IFrameAspectRatio = styled(AspectRatio.Root, {
  '& iframe': {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
