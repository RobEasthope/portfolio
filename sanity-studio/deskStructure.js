import S from '@sanity/desk-tool/structure-builder';
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

// const hiddenTypes = ['project'];

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .icon(GoPaintcan)
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Index page')
        .icon(GoBook)
        .child(
          S.list()
            .title('Sections')
            .items([
              S.listItem()
                .title('Landing section')
                .child(
                  S.editor()
                    .id('landing')
                    .schemaType('landing')
                    .documentId('landing')
                )
                .icon(GoNote),
              S.listItem()
                .title('Portfolio section')
                .child(
                  S.editor()
                    .id('portfolio')
                    .schemaType('portfolio')
                    .documentId('portfolio')
                )
                .icon(GoBookmark),
              S.listItem()
                .title('Sandbox section')
                .child(
                  S.editor()
                    .id('sandbox')
                    .schemaType('sandbox')
                    .documentId('sandbox')
                )
                .icon(GoRocket),
              S.listItem()
                .title('About section')
                .child(
                  S.editor()
                    .id('about')
                    .schemaType('about')
                    .documentId('about')
                )
                .icon(GoPerson),
            ])
        ),
      S.listItem()
        .title('Resume')
        .icon(GoTerminal)
        .child(
          S.list()
            .title('Resume')
            .items([
              S.listItem()
                .title('CV')
                .child(
                  S.editor()
                    .id('cv')
                    .schemaType('cv')
                    .documentId('cv')
                )
                .icon(GoNote),
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
                .title('Details')
                .child(
                  S.editor()
                    .id('details')
                    .schemaType('details')
                    .documentId('details')
                )
                .icon(FaRegAddressCard),
            ])
        ),
    ]);
