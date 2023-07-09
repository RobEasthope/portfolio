import type { InferSchemaValues } from '@sanity-typed/types';
import { defineConfig } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { BsBrush, BsFillCircleFill } from 'react-icons/bs';
import { FaGlobeEurope } from 'react-icons/fa';
import { HiOutlineBriefcase, HiOutlineCode } from 'react-icons/hi';
import { IoMdSchool } from 'react-icons/io';
import {
  RiCompasses2Line,
  RiListSettingsLine,
  RiPhoneLine,
  RiQuillPenLine,
  RiSettings2Line,
  RiShieldLine,
} from 'react-icons/ri';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { muxInput } from 'sanity-plugin-mux-input';
import { deskTool } from 'sanity/desk';

import { SANITY_PROJECT } from '~/constants/SANITY_PROJECT';

import { schemaTypes } from './sanity.schema';

const sanityConfig = defineConfig({
  name: 'default',
  title: 'Portfolio',

  basePath: '/sanity-studio',

  projectId: SANITY_PROJECT.PUBLIC_ID,
  dataset: SANITY_PROJECT.PUBLIC_DATASET,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .id('__root__')
          .title('Portfolio')
          .items([
            // Pages
            S.listItem()
              .title('Pages')
              .icon(RiQuillPenLine)
              .schemaType('Page')
              .child(S.documentTypeList('Page').title('Pages')),
            S.divider(),

            // Projects & technologies
            S.listItem()
              .title('Projects')
              .schemaType('project')
              .icon(BsBrush)
              .child(S.documentTypeList('project')),
            S.listItem()
              .title('Technologies')
              .icon(HiOutlineCode)
              .child(
                S.documentTypeList('tech')
                  .title('Technologies')
                  .defaultOrdering([{ field: 'name', direction: 'desc' }]),
              ),
            S.divider(),

            // CV & gigs
            S.listItem()
              .title('CVs')
              .icon(HiOutlineBriefcase)
              .child(
                S.documentTypeList('CV')
                  .title('CVs')
                  .defaultOrdering([{ field: 'title', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Gigs')
              .icon(BsFillCircleFill)
              .child(
                S.documentTypeList('gig')
                  .title('Gigs')
                  .defaultOrdering([{ field: 'name', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Organisations')
              .icon(RiShieldLine)
              .child(
                S.documentTypeList('organisation')
                  .title('Organisations')
                  .defaultOrdering([{ field: 'name', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Education')
              .icon(IoMdSchool)
              .child(
                S.documentTypeList('EduInstitution')
                  .title('Education')
                  .defaultOrdering([{ field: 'name', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Contact details')
              .icon(RiPhoneLine)
              .child(
                S.editor()
                  .id('Details')
                  .schemaType('Details')
                  .documentId('Details'),
              ),
            S.divider(),

            // Navigation
            S.listItem()
              .title('Navigation')
              .icon(RiCompasses2Line)
              .child(
                S.list()
                  .title('Navigation')
                  .showIcons(false)
                  .items([
                    S.listItem()
                      .title('Header')
                      .child(
                        S.document().schemaType('Header').documentId('Header'),
                      ),
                    S.listItem()
                      .title('Footer')
                      .child(
                        S.document().schemaType('Footer').documentId('Footer'),
                      ),
                  ]),
              ),
            S.divider(),

            // Settings
            S.listItem()
              .title('Settings')
              .icon(RiListSettingsLine)
              .child(
                S.list()
                  .title('Site details')
                  .items([
                    S.listItem()
                      .title('App settings')
                      .icon(RiSettings2Line)
                      .child(
                        S.document()
                          .schemaType('AppSettings')
                          .documentId('AppSettings'),
                      ),
                    S.listItem()
                      .title('Metadata fallbacks')
                      .icon(FaGlobeEurope)
                      .child(
                        S.document()
                          .schemaType('MetadataFallbacks')
                          .documentId('MetadataFallbacks'),
                      ),
                  ]),
              ),
          ]),
    }),
    media(),
    visionTool(),
    muxInput(),
  ],

  form: {
    // Only use Media plugin when selecting images
    image: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource,
        ),
    },
  },

  schema: {
    types: schemaTypes,
  },
});

export type SanitySchemaProps = InferSchemaValues<typeof sanityConfig>;

export default sanityConfig;
