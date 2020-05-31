import { createSelector } from 'reselect';

export const globalLoaderSelector = createSelector(
  state => state._global.loading,
  loading => loading
);
