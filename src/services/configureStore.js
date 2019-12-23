/* eslint-disable import/no-duplicates */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  saveUserData,
  updateUsersData,
  clearUserData,
  saveRegistrationStep,
  watchNotificationUpdates,
  allowSocketSubscription,
} from '../middleware';

import auth from '@ducks/auth';
import modal from '@ducks/modal';
import global from '@ducks/global';
import user from '@ducks/user';
import socket from '@ducks/sockets';
import sidebar from '@ducks/sidebar';

import { authSagas } from '@ducks/auth';
import { userSagas } from '@ducks/user';
import { socketSagas } from '@ducks/sockets';
import { sidebarSagas } from '@ducks/sidebar';

export default function configureStore() {
  const reducer = combineReducers({ auth, modal, global, user, socket, sidebar });
  const sagas = {
    ...authSagas,
    ...userSagas,
    ...socketSagas,
    ...sidebarSagas,
  };
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    saveUserData,
    updateUsersData,
    clearUserData,
    saveRegistrationStep,
    watchNotificationUpdates,
    allowSocketSubscription,
  ];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
  return store;
}
