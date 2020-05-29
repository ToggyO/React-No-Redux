import * as types from './types';

export const setGlobalLoading = newState => ({
  type: types.GLOBAL_LOADING(newState),
  payload: newState,
});
