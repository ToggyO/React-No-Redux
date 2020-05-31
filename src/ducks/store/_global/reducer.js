import * as types from './types';

const stateModel = {
  namespace: '_global',

  state: {
    loading: false,
    // errors: [],
  },

  reducer: (state, action) => {
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
  },
};

export { stateModel as _globalStateModel };

// FIXME: delete
// export const stateModel = {
//   global: {
//     loading: false,
//   },
// };

// const reducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case types.GLOBAL_LOADING(payload):
//       return {
//         ...state,
//         loading: payload,
//       };
//     default:
//       return state;
//   }
// };

// export { reducer as _globalReducer, stateModel as _globalStateModel };
