/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable camelcase */
import type { V2_HtmlMetaDescriptor } from '@vercel/remix';

/**
 * A utility function for the v2 meta API. It will
 * merge (filter) root metatags - replacing any that match
 * the supplied route module meta tags. It may not be complete
 * or the best way to do this but it works for the moment.
 * https://github.com/remix-run/remix/releases/tag/remix%401.8.0
 * https://github.com/remix-run/remix/discussions/4462
 *
 * @returns {V2_HtmlMetaDescriptor[]} Merged metatags
 */
export function mergeMeta(
  matches: any,
  tags: V2_HtmlMetaDescriptor[] = [],
): V2_HtmlMetaDescriptor[] {
  const rootModule = matches?.find((match: any) => match.route.id === 'root');
  const rootMeta = rootModule.meta;

  function findMatch(rootTag: any, tag: any) {
    const rules = [
      { k: 'charSet', f: () => !!tag.charSet },
      { k: 'title', f: () => !!tag.title },
      { k: 'name', f: () => rootTag.name === tag.name },
      { k: 'property', f: () => rootTag.property === tag.property },
      { k: 'httpEquiv', f: () => rootTag.httpEquiv === tag.httpEquiv },
    ];

    for (const rule of rules) {
      if (rootTag[rule.k] !== undefined) {
        return rule.f();
      }
    }
    return false;
  }

  if (rootMeta) {
    const filteredRootMeta = rootMeta.filter(
      (rootTag: V2_HtmlMetaDescriptor) => {
        for (const tag of tags) {
          if (findMatch(rootTag, tag)) {
            return false;
          }
        }
        return true;
      },
    );

    return [...filteredRootMeta, tags];
  }
  return tags;
}
