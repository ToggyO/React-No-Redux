import * as types from './types';

export const showGlobalSuccess = message => ({
  type: types.GLOBAL_SUCCESS_MESSAGE_SHOWN,
  payload: message,
});

export const hideGlobalSuccess = () => ({
  type: types.GLOBAL_SUCCESS_MESSAGE_HIDDEN,
});

export const showGlobalError = message => ({
  type: types.GLOBAL_ERROR_MESSAGE_SHOWN,
  payload: message,
});

export const hideGlobalError = () => ({
  type: types.GLOBAL_ERROR_MESSAGE_HIDDEN,
});
