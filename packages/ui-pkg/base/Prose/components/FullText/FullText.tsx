/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from "next/dynamic";
import { PortableTextComponents } from "@portabletext/react";
import { ImageProps } from "ui-pkg/blocks/Image/Image";
import { YoutubeVideoProps } from "ui-pkg/blocks/YoutubeVideo/YoutubeVideo";
import { Type } from "ui-pkg/base/Type/Type";
import { InternalLink } from "ui-pkg/base/InternalLink/InternalLink";
import { ExternalLink } from "ui-pkg/base/ExternalLink/ExternalLink";
import { Box } from "ui-pkg/base/Box/Box";
import { motion } from "framer-motion";

const Image = dynamic(() => import("ui-pkg/blocks/Image/Image"));
const YoutubeVideo = dynamic(() => import("ui-pkg/blocks/YoutubeVideo/YoutubeVideo"));

const TEXT_ANIMATION_DURATION = 0.6;
const TEXT_ANIMATION_DELAY = 0.4;
const TEXT_TRANSLATE_Y = 24;

// MARKUP
export const FullTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <motion.article
        initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: TEXT_ANIMATION_DURATION,
          delay: TEXT_ANIMATION_DELAY,
        }}
      >
        <Type as="h2">{children}</Type>
      </motion.article>
    ),
    h3: ({ children }) => (
      <motion.article
        initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: TEXT_ANIMATION_DURATION,
          delay: TEXT_ANIMATION_DELAY,
        }}
      >
        <Type as="h3">{children}</Type>
      </motion.article>
    ),
    h4: ({ children }) => (
      <motion.article
        initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: TEXT_ANIMATION_DURATION,
          delay: TEXT_ANIMATION_DELAY,
        }}
      >
        <Type as="h4">{children}</Type>
      </motion.article>
    ),
    normal: ({ children }) => (
      <motion.article
        initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: TEXT_ANIMATION_DURATION,
          delay: TEXT_ANIMATION_DELAY,
        }}
      >
        <Type as="p">{children}</Type>
      </motion.article>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <motion.article
        initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: TEXT_ANIMATION_DURATION,
          delay: TEXT_ANIMATION_DELAY,
        }}
      >
        <ul>{children}</ul>
      </motion.article>
    ),
    number: ({ children }) => (
      <motion.article
        initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: TEXT_ANIMATION_DURATION,
          delay: TEXT_ANIMATION_DELAY,
        }}
      >
        <ol>{children}</ol>
      </motion.article>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-gilroyBold text-inherit">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-inherit">{children}</em>,

    // Links
    ExternalLink: ({ children, value }) => (
      <ExternalLink href={value.url} className="text-inherit hover:text-aaltoLightBlue">
        {children}
      </ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink
        href={value?.page?.slug?.current}
        className="text-inherit hover:text-aaltoLightBlue"
      >
        {children}
      </InternalLink>
    ),
  },
  types: {
    Image: ({ value }: { value: ImageProps }) => {
      const { image, maxWidth, _type } = value;

      return (
        <motion.article
          initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: TEXT_ANIMATION_DURATION,
            delay: TEXT_ANIMATION_DELAY,
          }}
        >
          <Image image={image} maxWidth={maxWidth} _type={_type} />
        </motion.article>
      );
    },
    YoutubeVideo: ({ value }: { value: YoutubeVideoProps }) => {
      const { url, maxWidth, _type } = value;

      return (
        <motion.article
          initial={{ opacity: 0, translateY: TEXT_TRANSLATE_Y }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: TEXT_ANIMATION_DURATION,
            delay: TEXT_ANIMATION_DELAY,
          }}
        >
          <Box as="div" className="py-8">
            <YoutubeVideo url={url} maxWidth={maxWidth} _type={_type} />
          </Box>
        </motion.article>
      );
    },
  },
};
