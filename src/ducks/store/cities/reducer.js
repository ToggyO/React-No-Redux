import * as types from './types';

const stateModel = {
  namespace: 'cities',

  state: {
    items: [],
    pagination: {},
    errors: [],
  },

  reducer: (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.SET_CITIES:
        return {
          ...state,
          items: payload.items,
          pagination: payload.pagination,
        };
      default:
        return state;
    }
  },
};

export { stateModel as citiesStateModel };
