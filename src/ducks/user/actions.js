import * as types from './types';

export const fetchUserData = (dataType, page, pageSize, companyId, teamId, projectId, sidebarLoader) => ({
  type: types.FETCH_USER_DATA_REQUEST,
  payload: {
    dataType,
    page,
    pageSize,
    companyId,
    teamId,
    projectId,
    sidebarLoader,
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

export const deleteUserAvatar = () => ({
  type: types.DELETE_USER_AVATAR_REQUEST,
});

export const updateUserProjects = projectId => ({
  type: types.CHANGE_USER_AVATAR_REQUEST,
  payload: projectId,
});

export const clearUserErrors = () => ({
  type: types.CLEAR_USER_ERRORS,
});

export const clearUserExtra = () => ({
  type: types.CLEAR_USER_EXTRA,
});

export const changeUiTheme = theme => ({
  type: types.CHANGE_UI_THEME_REQUEST,
  payload: theme,
});

export const updateSingleUserTeam = data => ({
  type: types.UPDATE_SINGLE_USER_TEAM_REQUEST,
  payload: data,
});

// User loader
export const userLoaderStart = () => ({
  type: types.USER_PRELOADER_START,
});

export const userLoaderStop = () => ({
  type: types.USER_PRELOADER_STOP,
});

export const avatarLoaderStart = () => ({
  type: types.AVATAR_PRELOADER_START,
});

export const avatarLoaderStop = () => ({
  type: types.AVATAR_PRELOADER_STOP,
});
