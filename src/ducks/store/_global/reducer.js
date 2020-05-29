import * as types from './types';

export const stateModel = {
  global: {
    loading: false,
  },
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GLOBAL_LOADING(payload):
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export { reducer as _globalReducer, stateModel as _globalStateModel };
