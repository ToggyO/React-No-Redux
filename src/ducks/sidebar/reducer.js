// import * as types from './types';

const initialState = {
  data: {},
  loading: false,
  errors: [],
  extra: '',
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    // case types.FETCH_USER_DATA_REQUEST:
    // case types.USER_PRELOADER_START:
    //   return { ...state, loading: true };
    // case types.UPDATE_USER_DATA_REQUEST:
    //   return { ...state, spinner: true };
    // case types.CHANGE_USER_EMAIL_REQUEST:
    // case types.CONFIRM_NEW_USER_EMAIL_REQUEST:
    // case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_REQUEST:
    // case types.CHANGE_USER_PASSWORD_REQUEST:
    //   return { ...state, modalLoading: true };
    // case types.CHANGE_USER_AVATAR_REQUEST:
    //   return { ...state, modalLoading: true, avatarLoading: true };
    // case types.FETCH_USER_DATA_SUCCESS: {
    //   const { data, dataType } = action.payload;
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       [dataType]: data,
    //       [`${dataType}Loaded`]: true,
    //     },
    //     loading: false,
    //   };
    // }
    // case types.UPDATE_USER_DATA_SUCCESS:
    // case types.CONFIRM_NEW_USER_EMAIL_SUCCESS:
    // case types.CHANGE_USER_AVATAR_SUCCESS:
    //   return {
    //     ...state,
    //     spinner: false,
    //     modalLoading: false,
    //     avatarLoading: false,
    //     data: {
    //       ...state.data,
    //       user: action.payload,
    //     },
    //   };
    // case types.USER_PRELOADER_STOP:
    //   return { ...state, loading: false };
    // case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_SUCCESS:
    // case types.CHANGE_USER_PASSWORD_SUCCESS:
    //   return { ...state, modalLoading: false };
    // case types.CHANGE_USER_EMAIL_SUCCESS:
    //   return { ...state, modalLoading: false, extra: action.payload };
    // case types.AVATAR_PRELOADER_STOP:
    //   return { ...state, avatarLoading: false };
    // case types.FETCH_USER_DATA_ERROR:
    // case types.UPDATE_USER_DATA_ERROR:
    // case types.CHANGE_USER_EMAIL_ERROR:
    // case types.CONFIRM_NEW_USER_EMAIL_ERROR:
    // case types.SEND_NEW_CODE_TO_CHANGE_EMAIL_ERROR:
    // case types.CHANGE_USER_PASSWORD_ERROR:
    // case types.CHANGE_USER_AVATAR_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     spinner: false,
    //     modalLoading: false,
    //     avatarLoading: false,
    //     errors: action.payload,
    //   };
    // case types.CLEAR_USER_ERRORS:
    //   return { ...state, errors: [] };
    // case types.CLEAR_USER_EXTRA:
    //   return { ...state, extra: '' };
    default:
      return state;
  }
}
