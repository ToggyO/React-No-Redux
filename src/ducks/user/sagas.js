import { takeEvery, put, call } from 'redux-saga/effects';

import api from '@services/api';
import * as userTypes from '@ducks/user/types';

function* fetchUserData(action) {
  try {
    const { dataType = 'user' } = action.payload;
    const data = yield call(api.user.fetchUserData, action.payload);
    yield put({ type: userTypes.FETCH_USER_DATA_SUCCESS, payload: { dataType, data } });
  } catch (error) {
    const { response = {} } = error;
    const { data = {} } = response;
    const { errors = [] } = data;
    yield put({ type: userTypes.FETCH_USER_DATA_ERROR, payload: errors });
  }
}

export function* fetchUserDataSaga() {
  yield takeEvery(userTypes.FETCH_USER_DATA_REQUEST, fetchUserData);
}
