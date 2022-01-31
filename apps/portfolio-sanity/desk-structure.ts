import S from '@sanity/desk-tool/structure-builder';
import Iframe from 'sanity-plugin-iframe-pane';
import { toPlainText } from 'part:social-preview/utils';
import SocialPreview from 'part:social-preview/component';


import {
  RiCompasses2Line,
  RiListSettingsLine,
} from 'react-icons/ri';
import { ImNewspaper } from 'react-icons/im';
import { FaGlobeEurope } from 'react-icons/fa';
import {
  GoBook,
  GoBookmark,
  GoBriefcase,
  GoCode,
  GoNote,
  GoPaintcan,
  GoPerson,
  GoRocket,
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
            siteUrl: METADATA.SITE_URL || '',
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
        .title('About')
        .icon(GoTerminal)
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
                .icon(GoPerson),
              S.listItem()
                .title('Gigs')
                .icon(GoBriefcase)
                .child(
                  S.documentTypeList('gig').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
              S.listItem()
                .title('Technologies')
                .icon(GoCode)
                .child(
                  S.documentTypeList('tech').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
              S.listItem()
                .title('Organisations')
                .icon(FaRegAddressCard)
                .child(
                  S.documentTypeList('organisation').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
              S.listItem()
                .title('Education')
                .icon(FaUniversity)
                .child(
                  S.documentTypeList('education').defaultOrdering([
                    { field: 'name', direction: 'desc' },
                  ])
                ),
              S.listItem()
                .title('Contact details')
                .child(
                  S.editor()
                    .id('details')
                    .schemaType('details')
                    .documentId('details')
                )
                .icon(FaRegAddressCard),
            ])
        ),
      S.listItem()
        .title('Pages')
        .icon(ImNewspaper)
        .schemaType('Page')
        .child(S.documentTypeList('Page').title('Pages')),
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
                .icon(FaGlobeEurope)
                .child(
                  S.document()
                    .schemaType('Settings')
                    .documentId('Settings')
                ),
              S.listItem()
                .title('SEO & metadata')
                .icon(FaGlobeEurope)
                .child(
                  S.document()
                    .schemaType('GlobalMetadata')
                    .documentId('GlobalMetadata')
                ),
            ])
        ),
    ]);
  
