import * as types from './types';

const initialState = {
  data: {
    user: {},
    userLoaded: false,
    teams: [],
    teamsLoaded: false,
    companies: [],
    companiesLoaded: false,
    projects: [],
  },
  loading: false,
  errors: [],
  extra: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_DATA_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_USER_DATA_SUCCESS: {
      // debugger;
      const { data, dataType } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [dataType]: data,
          [`${dataType}Loaded`]: true,
        },
        loading: false,
      };
    }
    // case types.RESTORE_PASSWORD_SUCCESS:
    //   return { ...state, loading: false, extra: action.payload };
    // case types.REGISTRATION_DONE_SUCCESS: {
    //   const { data } = action.payload;
    //   return { ...state, loading: false, data: { ...state.data, registrationStep: data.registrationStep } };
    // }
    // case types.AUTH_PRELOADER_STOP:
    //   return { ...state, loading: false };
    case types.FETCH_USER_DATA_ERROR:
      return { ...state, loading: false, errors: action.payload };
    // case types.CLEAR_STORE_ERRORS:
    //   return { ...state, errors: [] };
    // case types.CLEAR_EXTRA:
    //   return { ...state, extra: '' };
    default:
      return state;
  }
}
