import * as types from './types';

export const showGlobalError = message => ({
  type: types.GLOBAL_ERROR_MESSAGE_SHOWN,
  payload: message,
});

export const hideGlobalError = () => ({
  type: types.GLOBAL_ERROR_MESSAGE_HIDDEN,
});
