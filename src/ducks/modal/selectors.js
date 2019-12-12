import { createSelector } from 'reselect';

export const modalKeySelector = createSelector(
  state => state.modal.modalKeyArray,
  errors => errors
);

export const modalOptionsSelector = createSelector(
  state => state.modal.options,
  errors => errors
);
