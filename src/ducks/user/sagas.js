import { takeEvery, put, call } from 'redux-saga/effects';

import * as types from './types';

import api from '@services/api';

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
