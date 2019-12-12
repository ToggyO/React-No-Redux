import * as types from './types';

const initialState = {
  modalKeyArray: [],
  options: {},
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case types.MODAL_OPEN: {
      const { modalKey, options } = action.payload;
      const filteredModalKey = state.modalKeyArray.filter(item => item === modalKey);
      if (filteredModalKey.length > 0) {
        return { ...state, modalKeyArray: [...state.modalKeyArray] };
      }
      return {
        ...state,
        modalKeyArray: [...state.modalKeyArray, modalKey],
        options,
      };
    }
    case types.MODAL_CLOSE: {
      const modalKey = action.payload;
      const filteredModalKey = state.modalKeyArray.filter(item => item !== modalKey);
      return { ...state, modalKeyArray: filteredModalKey };
    }
    case types.MODAL_CLEAR_OPTIONS: {
      return { ...state, options: {} };
    }
    default:
      return state;
  }
}
