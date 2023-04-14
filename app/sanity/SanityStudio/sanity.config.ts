import { visionTool } from '@sanity/vision';
import { FaGlobeEurope } from 'react-icons/fa';
import { GoDatabase, GoPaintcan, GoTerminal } from 'react-icons/go';
import { IoMdSchool } from 'react-icons/io';
import {
  RiAccountCircleLine,
  RiBriefcaseFill,
  RiCompasses2Line,
  RiListSettingsLine,
  RiPhoneLine,
  RiQuillPenLine,
  RiSettings2Line,
  RiShieldLine,
} from 'react-icons/ri';
import { defineConfig } from 'sanity';
import { muxInput } from 'sanity-plugin-mux-input';
import { deskTool } from 'sanity/desk';
import { SANITY_PROJECT } from '~/constants/SANITY_PROJECT';

import { schemaTypes } from './sanity.schema';

export default defineConfig({
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
            S.listItem()
              .title('Projects')
              .schemaType('project')
              .icon(GoPaintcan)
              .child(S.documentTypeList('project')),
            S.listItem()
              .title('Pages')
              .icon(RiQuillPenLine)
              .schemaType('Page')
              .child(S.documentTypeList('Page').title('Pages')),
            S.divider(),
            S.listItem()
              .title('About')
              .icon(RiAccountCircleLine)
              .child(
                S.list()
                  .title('About')
                  .items([
                    S.listItem()
                      .title('Gigs')
                      .icon(RiBriefcaseFill)
                      .child(
                        S.documentTypeList('gig').defaultOrdering([
                          { field: 'name', direction: 'desc' },
                        ]),
                      ),
                    S.listItem()
                      .title('Education')
                      .icon(IoMdSchool)
                      .child(
                        S.documentTypeList('education').defaultOrdering([
                          { field: 'name', direction: 'desc' },
                        ]),
                      ),
                    S.listItem()
                      .title('Contact details')
                      .icon(RiPhoneLine)
                      .child(
                        S.editor()
                          .id('details')
                          .schemaType('details')
                          .documentId('details'),
                      ),
                  ]),
              ),
            S.listItem()
              .title('Data')
              .icon(GoDatabase)
              .child(
                S.list()
                  .title('Data')
                  .items([
                    S.listItem()
                      .title('Technologies')
                      .icon(GoTerminal)
                      .child(
                        S.documentTypeList('tech').defaultOrdering([
                          { field: 'name', direction: 'desc' },
                        ]),
                      ),
                    S.listItem()
                      .title('Organisations')
                      .icon(RiShieldLine)
                      .child(
                        S.documentTypeList('organisation').defaultOrdering([
                          { field: 'name', direction: 'desc' },
                        ]),
                      ),
                  ]),
              ),
            S.divider(),
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
                          .schemaType('Settings')
                          .documentId('Settings'),
                      ),
                    S.listItem()
                      .title('SEO & Metadata')
                      .icon(FaGlobeEurope)
                      .child(
                        S.document()
                          .schemaType('GlobalMetadata')
                          .documentId('GlobalMetadata'),
                      ),
                  ]),
              ),
          ]),
    }),
    visionTool(),
    muxInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
