import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveUserData, updateUsersData, clearUserData, saveRegistrationStep } from '../middleware';

import auth, { authSagas } from '@ducks/auth';
import modal from '@ducks/modal';
import global from '@ducks/global';

import user, { userSagas } from '@ducks/user';

export default function configureStore() {
  const reducer = combineReducers({ auth, modal, global, user });
  console.log(user);
  console.log(userSagas);
  const sagas = {
    ...authSagas,
    // ...userSagas,
  };
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, saveUserData, updateUsersData, clearUserData, saveRegistrationStep];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
  return store;
}
