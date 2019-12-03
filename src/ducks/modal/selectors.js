import { createSelector } from 'reselect';

export const modalKeySelector = createSelector(
  state => state.modal.modalKeyArray,
  errors => errors
);
