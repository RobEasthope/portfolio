import SanityMuxPlayer from 'sanity-mux-player';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { Heading } from '@/UI/base/typography/Heading/Heading';
import { styled } from '@/UI/styles/stitches.config';
import { PictureWrapper } from '@/UI/base/layout/PictureWrapper';

export const Wrapper = styled('div', {
  position: 'relative',
  maxHeight: '100vh',
});

export const ForegroundContent = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  color: 'white',
  textAlign: 'center',
});

export const ForegroundContentLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const LogoWrapper = styled(PictureWrapper, {
  width: '400px',
});

export const Title = styled(Heading, {});

export const JumbotronBkgImage = styled(Picture, {
  width: '100vw',
  height: '100vh',
});

export const JumbotronBkgVideo = styled(SanityMuxPlayer, {
  width: '100vw !important',
  height: '100vh !important',

  '& video': {
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
});
