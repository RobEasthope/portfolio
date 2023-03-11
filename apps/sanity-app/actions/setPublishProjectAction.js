import { useEffect, useState } from 'react';

import { useDocumentOperation, useValidationStatus } from '@sanity/react-hooks';

const ROUTE_PREFIX = 'work';

export function SetPublishProjectAction(props) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);
  const { isValidating, markers } = useValidationStatus(props.id, props.type);

  useEffect(() => {
    // If the isPublishing state was set to true and the draft has changed to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft, isPublishing]);

  return {
    disabled:
      isPublishing ||
      publish.disabled ||
      isValidating ||
      markers.some((marker) => marker.level === 'error'),
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      // This will update the button text
      setIsPublishing(true);

      // Initial use slug value in case a fullSlug value hasn't been set
      const pageSlug = props?.draft?.pageSlug?.current;

      // If course route has been set then patch doc
      if (ROUTE_PREFIX && pageSlug) {
        const pageUrl = `${ROUTE_PREFIX}/${pageSlug?.toLowerCase()}`;

        patch.execute([{ set: { slug: { _type: 'slug', current: pageUrl } } }]);
      } else {
        return;
      }

      // Perform the publish
      publish.execute();

      // Signal that the action is completed
      props.onComplete();
    },
  };
}
