import Vimeo from '@u-wave/react-vimeo';
import { VimeoVideo as rawVimeoVideoProps } from 'ui-pkg/types/sanity-schema';
import { MaxWidth } from 'ui-pkg/base/structure/MaxWidth/MaxWidth';
import { PaddedComponent } from 'ui-pkg/base/structure/PaddedComponent/PaddedComponent';
import { Caption } from 'ui-pkg/base/typography/Caption/Caption';
import { Breakout } from 'ui-pkg/base/structure/Breakout/Breakout';

// TYPES
export type VimeoVideoProps = rawVimeoVideoProps;

// MARKUP
export const VimeoVideo = ({
  url,
  caption,
  maxWidth = 'medium',
}: VimeoVideoProps) => {
  if (!url) {
    return null;
  }

  return (
    <PaddedComponent as="section" content="media">
      <Breakout>
        <MaxWidth width={maxWidth}>
          <Vimeo video={url} responsive />
          {caption && <Caption as="figcaption">{caption}</Caption>}
        </MaxWidth>
      </Breakout>
    </PaddedComponent>
  );
};

export default VimeoVideo;
