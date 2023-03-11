import defaultResolve, {
  PublishAction,
} from 'part:@sanity/base/document-actions';

import { SetPublishProjectAction } from './actions/setPublishProjectAction.js';

/// Publish Actions
export default function useDocumentActions(props) {
  if (['project'].indexOf(props.type) !== -1) {
    return defaultResolve(props).map((Action) =>
      Action === PublishAction ? SetPublishProjectAction : Action
    );
  }

  return defaultResolve(props);
}
