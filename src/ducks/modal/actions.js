import * as types from './types';

export const modalOpen = itemKey => ({
  type: types.MODAL_OPEN,
  payload: itemKey,
});

export const modalClose = itemKey => ({
  type: types.MODAL_CLOSE,
  payload: itemKey,
});
