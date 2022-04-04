import S from '@sanity/desk-tool/structure-builder';
import Iframe from 'sanity-plugin-iframe-pane';
import { toPlainText } from 'part:social-preview/utils';
import SocialPreview from 'part:social-preview/component';

import {
  RiCompasses2Line,
  RiListSettingsLine,
  RiQuillPenLine,
  RiAccountCircleLine,
  RiSettings2Line,
  RiShieldLine,
  RiBriefcaseFill,
  RiPhoneLine
} from 'react-icons/ri';
import { FaGlobeEurope } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoMdSchool } from 'react-icons/io';
import {
  GoBriefcase,
  GoDatabase,
  GoPaintcan,
  GoPerson,
  GoTerminal,
} from 'react-icons/go';
import { FaRegAddressCard, FaUniversity } from 'react-icons/fa';

import resolvePreviewUrl from './utils/resolvePreviewUrl';
import { METADATA } from './constants/METADATA';

export const getDefaultDocumentNode = () => {
  // Return all documents with just 1 view: the form
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        // Required: Accepts an async function
        url: (doc) => resolvePreviewUrl(doc),
        // Optional: Set the default size
        defaultSize: `desktop`, // default `desktop`
        // Optional: Add a reload button, or reload on new document revisions
        reload: {
          button: true, // default `undefined`
          revision: true, // default `undefined`
        },
      })
      .title('Preview'),
    S.view.component(SocialPreview({
          // Overwrite prepareFunction to pick the right fields
          prepareFunction: (
            /* this object is the currently active document */
            { metadataTitle, metadataDescription, title, metadataImage, slug } ,
          ) => ({
            title: metadataTitle || title,
            description: metadataDescription || '',
            siteUrl: process.env.SANITY_STUDIO_PREVIEW_SITE || '',
            ogImage: metadataImage,
            // Used by Google preview to render the full URL
            // Note that this is a string, not an object (slug { current: string })
            slug: `/${slug?.current}` || ''
          }),
          google: true,
          facebook: true,
          twitter: true,
          linkedin: false,
        })).title('Social & SEO'),
  ])
}

export default () =>
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
      S.listItem()
        .title('Landing section')
        .child(
          S.editor()
            .id('landing')
            .schemaType('landing')
            .documentId('landing')
        ),
                // .icon(GoNote),
      S.divider(),
      S.listItem()
        .title('About')
        .icon(RiAccountCircleLine)
        .child(
          S.list()
            .title('About')
            .items([
              S.listItem()
                .title('Profile')
                .child(
                  S.editor()
                    .id('about')
                    .schemaType('about')
                    .documentId('about')
                )
                .icon(CgProfile),
              S.listItem()
                .title('Gigs')
                .icon(RiBriefcaseFill)
                .child(
                  S.documentTypeList('gig').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
              S.listItem()
                .title('Education')
                .icon(IoMdSchool)
                .child(
                  S.documentTypeList('education').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
              S.listItem()
                .title('Contact details')
                .icon(RiPhoneLine)
                .child(
                  S.editor()
                    .id('details')
                    .schemaType('details')
                    .documentId('details')
                ),
            ])
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
                  ])
                ),
              S.listItem()
                .title('Organisations')
                .icon(RiShieldLine)
                .child(
                  S.documentTypeList('organisation').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
            ])
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
                  S.document()
                    .schemaType('Header')
                    .documentId('Header')
                ),
            ])
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
                    .documentId('Settings')
                ),
              S.listItem()
                .title('SEO & Metadata')
                .icon(FaGlobeEurope)
                .child(
                  S.document()
                    .schemaType('GlobalMetadata')
                    .documentId('GlobalMetadata')
                ),
            ])
        ),
    ]);
  
