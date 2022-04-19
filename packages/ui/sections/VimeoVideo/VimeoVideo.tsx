import Vimeo from '@u-wave/react-vimeo';
import { VimeoVideo as rawVimeoVideoProps } from '~/UI/types/sanity-schema';
import { MaxWidth } from '~/UI/base/structure/MaxWidth/MaxWidth';
import { PaddedComponent } from '~/UI/base/structure/PaddedComponent/PaddedComponent';
import { Caption } from '~/UI/base/typography/Caption/Caption';
import { Breakout } from '~/UI/base/structure/Breakout/Breakout';

// TYPES
export interface VimeoVideoProps extends rawVimeoVideoProps {
  breakout?: boolean;
}

// MARKUP
export const VimeoVideo = ({
  url,
  caption,
  maxWidth = 'medium',
  breakout,
}: VimeoVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout active={breakout}>
        <MaxWidth width={maxWidth}>
          <Vimeo video={url} responsive />
          {caption && <Caption as="figcaption">{caption}</Caption>}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default VimeoVideo;
