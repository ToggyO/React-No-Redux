import * as types from './types';

const initialState = {
  modalKey: '',
  options: {},
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case types.MODAL_OPEN: {
      const { modalKey, options } = action.payload;
      return { ...state, modalKey, options };
    }
    case types.MODAL_CLOSE:
      return { ...initialState };
    default:
      return state;
  }
}
