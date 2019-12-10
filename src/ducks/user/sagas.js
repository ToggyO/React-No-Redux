import { takeEvery, put, call } from 'redux-saga/effects';

import * as types from './types';

import { modalTypes } from '@ducks/modal';

import api from '@services/api';
// import { modalClose } from '@ducks/modal/actions';

function* fetchUserData(action) {
  try {
    const { dataType } = action.payload;
    const data = yield call(api.user.fetchUserData, action.payload);
    yield put({
      type: types.FETCH_USER_DATA_SUCCESS,
      payload: {
        dataType: dataType || 'user',
        data: data.data,
      },
    });
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
  }
}

export function* updateUserDataSaga() {
  yield takeEvery(types.UPDATE_USER_DATA_REQUEST, updateUserData);
}

function* changeUserEmailRequest(action) {
  try {
    yield call(api.user.changeUserEmailRequest, action.payload);
    yield put({ type: types.CHANGE_USER_EMAIL_SUCCESS });
    yield put({ type: modalTypes.MODAL_CLOSE, payload: 'ModalChangeEmail' });
    yield put({ type: modalTypes.MODAL_OPEN, payload: 'ModalConfirmEmailChange' });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: types.CHANGE_USER_EMAIL_ERROR, payload: errors });
  }
}

export function* changeUserEmailRequestSaga() {
  yield takeEvery(types.CHANGE_USER_EMAIL_REQUEST, changeUserEmailRequest);
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
  yield takeEvery(types.CONFIRM_NEW_USER_EMAIL_REQUEST, confirmNewUserEmail);
}
