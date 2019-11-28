import { createSelector } from 'reselect';

export const globalErrorSelector = createSelector(
  state => state.global.error,
  errors => errors
);
