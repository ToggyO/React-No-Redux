import { takeLatest, take, put, call } from 'redux-saga/effects';

// import { store } from '../../store';
//
import * as sidebarTypes from './types';

import { sidebarSockets } from '@ducks/sidebar';
import { createSocketConnection } from '@services/signalR';

// import { ROUTES } from '@config';
// import { historyRedirect } from '@utils/index';
// import api from '@services/api';
const url = '/ws/projects';

function* testSocketConnection(action) {
  try {
    const channel = yield call(sidebarSockets.subscribeOnUserProjects, {
      socket: createSocketConnection(url),
      teamId: action.payload.teamId,
    });
    while (true) {
      yield take(channel);
      yield put({ type: sidebarTypes.SOCKET_CONNECT_SUCCESS });
    }
  } catch (error) {
    yield put({ type: sidebarTypes.SOCKET_CONNECT_ERROR, payload: error });
  }
}

export function* testSocketConnectionSaga() {
  yield takeLatest(sidebarTypes.SOCKET_CONNECT_REQUEST, testSocketConnection);
}

// function* signUpWithEmail(action) {
//   try {
//     const data = yield call(api.auth.signUpWithEmail, action.payload);
//     yield put({ type: sidebarTypes.SIGNUP_WITH_EMAIL_SUCCESS, payload: data });
//     yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL);
//   } catch (error) {
//     const { response = {} } = error;
//     const { data = {} } = response;
//     const { errors = [] } = data;
//     yield put({ type: sidebarTypes.SIGNUP_WITH_EMAIL_ERROR, payload: errors });
//   }
// }
//
// export function* signUpWithEmailSaga() {
//   yield takeLatest(sidebarTypes.SIGNUP_WITH_EMAIL_REQUEST, signUpWithEmail);
// }
