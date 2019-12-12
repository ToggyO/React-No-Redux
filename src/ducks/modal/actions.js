import * as types from './types';

export const modalOpen = (modalKey, options) => ({
  type: types.MODAL_OPEN,
  payload: {
    modalKey,
    options,
  },
});

export const modalClose = modalKey => ({
  type: types.MODAL_CLOSE,
  payload: modalKey,
});

export const modalClearOptions = () => ({
  type: types.MODAL_CLEAR_OPTIONS,
});
