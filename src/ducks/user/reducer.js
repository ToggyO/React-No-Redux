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
  spinner: false,
  loading: false,
  modalLoading: false,
  errors: [],
  extra: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_DATA_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_USER_DATA_REQUEST:
      return { ...state, spinner: true };
    case types.CHANGE_USER_EMAIL_REQUEST:
    case types.CONFIRM_NEW_USER_EMAIL_REQUEST:
    case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_REQUEST:
    case types.CHANGE_USER_PASSWORD_REQUEST:
      return { ...state, modalLoading: true };
    case types.FETCH_USER_DATA_SUCCESS: {
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
    case types.UPDATE_USER_DATA_SUCCESS:
    case types.CONFIRM_NEW_USER_EMAIL_SUCCESS:
      return {
        ...state,
        spinner: false,
        modalLoading: false,
        data: {
          ...state.data,
          user: action.payload,
        },
      };
    case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_SUCCESS:
    case types.CHANGE_USER_PASSWORD_SUCCESS:
      return { ...state, modalLoading: false };
    case types.CHANGE_USER_EMAIL_SUCCESS:
      return { ...state, modalLoading: false, extra: action.payload };

    // case types.RESTORE_PASSWORD_SUCCESS:
    //   return { ...state, loading: false, extra: action.payload };
    // case types.REGISTRATION_DONE_SUCCESS: {
    //   const { data } = action.payload;
    //   return { ...state, loading: false, data: { ...state.data, registrationStep: data.registrationStep } };
    // }
    // case types.AUTH_PRELOADER_STOP:
    //   return { ...state, loading: false };
    case types.FETCH_USER_DATA_ERROR:
    case types.UPDATE_USER_DATA_ERROR:
    case types.CHANGE_USER_EMAIL_ERROR:
    case types.CONFIRM_NEW_USER_EMAIL_ERROR:
    case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_ERROR:
    case types.CHANGE_USER_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        spinner: false,
        modalLoading: false,
        errors: action.payload,
      };
    case types.CLEAR_USER_ERRORS:
      return { ...state, errors: [] };
    case types.CLEAR_USER_EXTRA:
      return { ...state, extra: '' };
    default:
      return state;
  }
}
