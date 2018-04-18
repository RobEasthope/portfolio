export const selectProjectContainer = state => state.containers.projectReducer;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectPrismicDoc = state => selectProjectContainer(state).get('prismicDoc');
