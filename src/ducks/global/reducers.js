import * as types from './types';

const initialState = {
  success: '',
  error: '',
};

export default function global(state = initialState, action) {
  switch (action.type) {
    case types.GLOBAL_SUCCESS_MESSAGE_SHOWN:
      return { ...state, success: action.payload };
    case types.GLOBAL_SUCCESS_MESSAGE_HIDDEN:
      return { ...state, success: '' };
    case types.GLOBAL_ERROR_MESSAGE_SHOWN:
      return { ...state, error: action.payload };
    case types.GLOBAL_ERROR_MESSAGE_HIDDEN:
      return { ...state, error: '' };
    default:
      return state;
  }
}
