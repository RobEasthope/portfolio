import { LandingHero as rawLandingHeroProps } from "ui-pkg/types/sanity-schema";
import SanityMuxPlayer from "sanity-mux-player";
import { Picture } from "ui-pkg/base/media/Picture/Picture";
import { styled } from "ui-pkg/styles/stitches.config";
import { SPACING } from "ui-pkg/constants/SPACING";

// STYLES
const heroHeight = `calc(100vh - ${SPACING.x5})`;

export const Wrapper = styled("div", {
  position: "relative",
  maxHeight: "100vh",
  backgroundColor: "white",
});

export const JumbotronBkgImage = styled(Picture, {
  width: "100%",
  height: heroHeight,
});

export const JumbotronBkgVideo = styled(SanityMuxPlayer, {
  width: "100% !important",
  height: heroHeight,

  "& video": {
    height: heroHeight,
    objectFit: "cover",
    objectPosition: "center center",
  },
});

// TYPES
export interface LandingHeroProps extends rawLandingHeroProps {
  muxVideo: unknown;
}

// MARKUP
export const LandingHero = ({
  heading,
  bkgMode,
  bkgImage,
  muxVideo,
}: LandingHeroProps) => {
  if (!bkgImage && !muxVideo) {
    return null;
  }

  return (
    <Wrapper as="section">
      {bkgImage && bkgMode === "image" && (
        <JumbotronBkgImage
          alt={heading || ""}
          asset={bkgImage}
          mode="cover"
          maxWidth={2560}
        />
      )}
      {muxVideo && bkgMode === "video" && (
        <JumbotronBkgVideo
          assetDocument={muxVideo}
          autoload
          autoplay
          mute
          loop
          showControls={false}
        />
      )}
    </Wrapper>
  );
};

export default LandingHero;
