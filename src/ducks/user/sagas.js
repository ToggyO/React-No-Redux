import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';

import * as types from './types';

import { sidebarTypes } from '@ducks/sidebar';
import { modalTypes } from '@ducks/modal';
import { globalTypes } from '@ducks/global';

import api from '@services/api';
// import { modalClose } from '@ducks/modal/actions';

function* fetchUserData(action) {
  try {
    const { dataType, sidebarLoader } = action.payload;
    if (sidebarLoader) yield put({ type: sidebarTypes.SIDEBAR_PRELOADER_START });
    const data = yield call(api.user.fetchUserData, action.payload);
    yield put({
      type: types.FETCH_USER_DATA_SUCCESS,
      payload: {
        dataType: dataType || 'user',
        data: data.data,
      },
    });
    if (sidebarLoader) yield put({ type: sidebarTypes.SIDEBAR_PRELOADER_STOP });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.FETCH_USER_DATA_ERROR, payload: errors });
  }
}

export function* fetchUserDataSaga() {
  yield takeEvery(types.FETCH_USER_DATA_REQUEST, fetchUserData);
}

function* updateUserData(action) {
  try {
    const data = yield call(api.user.updateUserData, action.payload);
    yield put({ type: types.UPDATE_USER_DATA_SUCCESS, payload: data.data });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.UPDATE_USER_DATA_ERROR, payload: errors });
    yield put({ type: globalTypes.GLOBAL_ERROR_MESSAGE_SHOWN, payload: 'Something went wrong.' });
  }
}

export function* updateUserDataSaga() {
  yield takeLatest(types.UPDATE_USER_DATA_REQUEST, updateUserData);
}

function* changeUserEmailRequest(action) {
  try {
    const data = yield call(api.user.changeUserEmailRequest, action.payload);
    yield put({
      type: types.CHANGE_USER_EMAIL_SUCCESS,
      payload: {
        newEmail: action.payload.newEmail,
        token: data.data.token,
      },
    });
    yield put({
      type: globalTypes.GLOBAL_SUCCESS_MESSAGE_SHOWN,
      payload: `Confirmation code is sent to ${action.payload.newEmail}`,
    });
    yield put({ type: modalTypes.MODAL_CLOSE, payload: 'ModalChangeEmail' });
    yield put({ type: modalTypes.MODAL_OPEN, payload: { modalKey: 'ModalConfirmEmailChange' } });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.CHANGE_USER_EMAIL_ERROR, payload: errors });
  }
}

export function* changeUserEmailRequestSaga() {
  yield takeLatest(types.CHANGE_USER_EMAIL_REQUEST, changeUserEmailRequest);
}

function* confirmNewUserEmail(action) {
  try {
    const data = yield call(api.user.confirmNewUserEmail, action.payload);
    yield put({ type: types.CONFIRM_NEW_USER_EMAIL_SUCCESS, payload: data.data });
    yield put({ type: modalTypes.MODAL_CLOSE, payload: 'ModalConfirmEmailChange' });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.CONFIRM_NEW_USER_EMAIL_ERROR, payload: errors });
  }
}

export function* confirmNewUserEmailSaga() {
  yield takeLatest(types.CONFIRM_NEW_USER_EMAIL_REQUEST, confirmNewUserEmail);
}

function* sendNewCodeToChangeEmail(action) {
  try {
    yield call(api.user.sendNewCodeToChangeEmail, action.payload);
    yield put({
      type: globalTypes.GLOBAL_SUCCESS_MESSAGE_SHOWN,
      payload: `Confirmation code is sent to ${action.payload.newEmail}`,
    });
    yield put({ type: types.SEND_NEW_CODE_TO_CHANGE_EMAIL_SUCCESS });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.SEND_NEW_CODE_TO_CHANGE_EMAIL_ERROR, payload: errors });
  }
}

export function* sendNewCodeToChangeEmailSaga() {
  yield takeLatest(types.SEND_NEW_CODE_TO_CHANGE_EMAIL_REQUEST, sendNewCodeToChangeEmail);
}

function* changeUserPassword(action) {
  try {
    const data = yield call(api.user.changeUserPassword, action.payload);
    yield put({ type: types.CHANGE_USER_PASSWORD_SUCCESS, payload: data.data });
    yield put({ type: modalTypes.MODAL_CLOSE, payload: 'ModalChangePassword' });
    yield put({ type: modalTypes.MODAL_OPEN, payload: { modalKey: 'ModalChangePasswordSuccess' } });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.CHANGE_USER_PASSWORD_ERROR, payload: errors });
  }
}

export function* changeUserPasswordSaga() {
  yield takeLatest(types.CHANGE_USER_PASSWORD_REQUEST, changeUserPassword);
}

function* changeUserAvatar(action) {
  try {
    const data = yield call(api.user.changeUserAvatar, action.payload);
    yield put({ type: types.CHANGE_USER_AVATAR_SUCCESS, payload: data.data });
    yield put({ type: modalTypes.MODAL_CLOSE, payload: 'ModalCropperPreview' });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.CHANGE_USER_AVATAR_ERROR, payload: errors });
    yield put({ type: globalTypes.GLOBAL_ERROR_MESSAGE_SHOWN, payload: 'Something went wrong.' });
  }
}

export function* changeUserAvatarSaga() {
  yield takeLatest(types.CHANGE_USER_AVATAR_REQUEST, changeUserAvatar);
}

function* deleteUserAvatar() {
  try {
    const data = yield call(api.user.deleteUserAvatar);
    yield put({ type: types.DELETE_USER_AVATAR_SUCCESS, payload: data.data });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.DELETE_USER_AVATAR_ERROR, payload: errors });
  }
}

export function* deleteUserAvatarSaga() {
  yield takeLatest(types.DELETE_USER_AVATAR_REQUEST, deleteUserAvatar);
}

function* updateUserProjects(action) {
  try {
    const { changesType } = action.payload;
    const data = yield call(api.user.fetchUserData, action.payload);
    yield put({
      type: types.UPDATE_USER_PROJECTS_SUCCESS,
      payload: {
        data: data.data,
        changesType,
      },
    });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.UPDATE_USER_PROJECTS_ERROR, payload: errors });
  }
}

export function* updateUserProjectsSaga() {
  yield takeLatest(types.UPDATE_USER_PROJECTS_REQUEST, updateUserProjects);
}

function* changeUiTheme(action) {
  try {
    const data = yield call(api.user.changeUiTheme, action.payload);
    yield put({ type: types.CHANGE_UI_THEME_SUCCESS, payload: data.data });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.CHANGE_UI_THEME_ERROR, payload: errors });
  }
}

export function* changeUiThemeSaga() {
  yield takeEvery(types.CHANGE_UI_THEME_REQUEST, changeUiTheme);
}
