import S from '@sanity/desk-tool/structure-builder';
import {
  GoBook,
  GoBookmark,
  GoCode,
  GoNote,
  GoPaintcan,
  GoTerminal,
} from 'react-icons/go';
import { FaRegAddressCard } from 'react-icons/fa';

const hiddenTypes = ['project'];

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
            ])
        ),
      S.listItem()
        .title('Tech & Orgs')
        .icon(GoTerminal)
        .child(
          S.list()
            .title('Tech & Orgs')
            .items([
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
            ])
        ),
    ]);
