import { takeEvery, put, call, take, select } from 'redux-saga/effects';

import * as sidebarTypes from './types';

import { sockets, socketSelectors } from '@ducks/sockets';
import { createSocketConnection } from '@services/signalR';

function* socketConnection(action) {
  try {
    const connection = yield call(createSocketConnection, action.payload);
    yield put({
      type: sidebarTypes.SOCKET_CONNECT_SUCCESS,
      payload: {
        url: action.payload,
        connection,
      },
    });
  } catch (error) {
    yield put({ type: sidebarTypes.SOCKET_CONNECT_ERROR, payload: error });
  }
}

export function* testSocketConnectionSaga() {
  yield takeEvery(sidebarTypes.SOCKET_CONNECT_REQUEST, socketConnection);
}

function* subscribeOnProjects(action) {
  try {
    const { subscribeMethod, watchMethod, data } = action.payload;
    const connection = yield select(socketSelectors.notificationsSelector);
    const channel = yield call(sockets.createNotificationChannel, {
      socket: connection,
      subscribeMethod,
      watchMethod,
      data,
    });
    while (true) {
      const payload = yield take(channel);
      yield put({ type: sidebarTypes.SUBSCRIBE_ON_NOTIFICATIONS_SUCCESS, payload });
    }
  } catch (error) {
    yield put({ type: sidebarTypes.SUBSCRIBE_ON_NOTIFICATIONS_ERROR, payload: error });
  }
}

export function* subscribeOnProjectsSaga() {
  yield takeEvery(sidebarTypes.SUBSCRIBE_ON_NOTIFICATIONS_REQUEST, subscribeOnProjects);
}
