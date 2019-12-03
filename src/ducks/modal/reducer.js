import * as types from './types';

const initialState = {
  modalKeyArray: [],
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case types.MODAL_OPEN: {
      const modalKey = action.payload;
      const filteredModalKey = state.modalKeyArray.filter(item => item === modalKey);
      if (filteredModalKey.length > 0) {
        return { ...state, modalKeyArray: [...state.modalKeyArray] };
      }
      return { ...state, modalKeyArray: [...state.modalKeyArray, modalKey] };
    }
    case types.MODAL_CLOSE: {
      const modalKey = action.payload;
      const filteredModalKey = state.modalKeyArray.filter(item => item !== modalKey);
      return { ...state, modalKeyArray: filteredModalKey };
    }
    default:
      return state;
  }
}
