import * as types from './types';

export const fetchUserData = (dataType, page, pageSize) => ({
  type: types.FETCH_USER_DATA_REQUEST,
  payload: {
    dataType,
    page,
    pageSize,
  },
});

export const updateUserData = name => ({
  type: types.UPDATE_USER_DATA_REQUEST,
  payload: name,
});

export const changeUserEmailRequest = data => ({
  type: types.CHANGE_USER_EMAIL_REQUEST,
  payload: data,
});

export const confirmNewUserEmail = code => ({
  type: types.CONFIRM_NEW_USER_EMAIL_REQUEST,
  payload: code,
});

export const sendNewCodeToChangeEmail = data => ({
  type: types.SEND_NEW_CODE_TO_CHANGE_EMAIL_REQUEST,
  payload: data,
});

export const changeUserPassword = data => ({
  type: types.CHANGE_USER_PASSWORD_REQUEST,
  payload: data,
});

export const changeUserAvatar = data => ({
  type: types.CHANGE_USER_AVATAR_REQUEST,
  payload: data,
});

export const clearUserErrors = () => ({
  type: types.CLEAR_USER_ERRORS,
});

export const clearUserExtra = () => ({
  type: types.CLEAR_USER_EXTRA,
});
