import type { V2_HtmlMetaDescriptor, V2_MetaFunction } from '@remix-run/node';

export const mergeMeta =
  (overrideFn: V2_MetaFunction, appendFn?: V2_MetaFunction): V2_MetaFunction =>
  (arg) => {
    // get meta from parent routes
    let mergedMeta = arg.matches.reduce(
      (acc, match) => acc.concat(match.meta || []),
      [] as V2_HtmlMetaDescriptor[],
    );

    // replace any parent meta with the same name or property with the override
    const overrides = overrideFn(arg);
    for (const override of overrides) {
      const index = mergedMeta.findIndex(
        (meta) =>
          ('name' in meta &&
            'name' in override &&
            meta.name === override.name) ||
          ('property' in meta &&
            'property' in override &&
            meta.property === override.property) ||
          ('title' in meta && 'title' in override),
      );
      if (index !== -1) {
        mergedMeta.splice(index, 1, override);
      }
    }

    // append any additional meta
    if (appendFn) {
      mergedMeta = mergedMeta.concat(appendFn(arg));
    }

    return mergedMeta;
  };
