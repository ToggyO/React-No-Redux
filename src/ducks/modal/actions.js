import * as types from './types';

export const modalOpen = (modalKey, options) => ({
  type: types.MODAL_OPEN,
  payload: {
    modalKey,
    options,
  },
});

export const modalClose = () => ({
  type: types.MODAL_CLOSE,
});
