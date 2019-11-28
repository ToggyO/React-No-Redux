import * as types from './types';

const initialState = {
  error: '',
};

export default function global(state = initialState, action) {
  switch (action.type) {
    case types.GLOBAL_ERROR_MESSAGE_SHOWN:
      return { ...state, error: action.payload };
    case types.GLOBAL_ERROR_MESSAGE_HIDDEN:
      return { ...state, error: '' };
    default:
      return state;
  }
}
