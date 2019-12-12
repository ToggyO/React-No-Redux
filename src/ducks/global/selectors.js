import { createSelector } from 'reselect';

export const globalSuccessSelector = createSelector(
  state => state.global.success,
  errors => errors
);

export const globalErrorSelector = createSelector(
  state => state.global.error,
  errors => errors
);
