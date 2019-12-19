// import { takeEvery, put, call } from 'redux-saga/effects';
//
// import * as types from './types';
//
// import { modalTypes } from '@ducks/modal';
// import { globalTypes } from '@ducks/global';
//
// import api from '@services/api';

// function* fetchUserData(action) {
//   try {
//     const { dataType } = action.payload;
//     const data = yield call(api.user.fetchUserData, action.payload);
//     yield put({
//       type: types.FETCH_USER_DATA_SUCCESS,
//       payload: {
//         dataType: dataType || 'user',
//         data: data.data,
//       },
//     });
//   } catch (error) {
//     const { response = {} } = error;
//     const { data = {} } = response;
//     const { errors = [] } = data;
//     yield put({ type: types.FETCH_USER_DATA_ERROR, payload: errors });
//   }
// }
//
// export function* fetchUserDataSaga() {
//   yield takeEvery(types.FETCH_USER_DATA_REQUEST, fetchUserData);
// }
