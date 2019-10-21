import { createSelector } from 'reselect';

export const errorsSelector = createSelector(
  state => state.auth.errors,
  errors => errors
);
export const loadingSelector = createSelector(
  state => state.auth.loading,
  loading => loading
);
