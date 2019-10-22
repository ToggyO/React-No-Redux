import { takeLatest, put, call } from 'redux-saga/effects';

import * as authTypes from './types';

import { ROUTES } from '@config/routes';

import { historyRedirect } from '@utils/index';

// import { ROUTES } from '@config';
import api from '@services/api';
// import history from '@services/history';

/*
	function* workerSaga
	export function* watcherSaga
*/

function* signUpWithEmail(action) {
  try {
    // {
    //   "httpStatusCode": 200,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.signUpWithEmail, action.payload);
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_SUCCESS, payload: data });
  } catch (error) {
    // {
    //   "Message": "The specified string is not in the form required for an e-mail address.",
    //   "Errors": [],
    //   "Code": "fatal"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_ERROR, payload: errors });
  }
}

export function* signUpWithEmailSaga() {
  yield takeLatest(authTypes.SIGNUP_WITH_EMAIL_REQUEST, signUpWithEmail);
}

function* signUpWithGoogle(action) {
  try {
    // {
    //   "httpStatusCode": 200,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.signUpWithGoogle, action.payload);
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_SUCCESS, payload: data });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.ENTER_NAME);
  } catch (error) {
    // {
    //   "Message": "The specified string is not in the form required for an e-mail address.",
    //   "Errors": [],
    //   "Code": "fatal"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_ERROR, payload: errors });
  }
}

export function* signUpWithGoogleSaga() {
  yield takeLatest(authTypes.SIGNUP_WITH_GOOGLE_REQUEST, signUpWithGoogle);
}

function* LoginWithGoogle(action) {
  try {
    // {
    //   "httpStatusCode": 200,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.loginWithGoogle, action.payload);
    yield put({ type: authTypes.LOGIN_IN_WITH_GOOGLE_SUCCESS, payload: data });
  } catch (error) {
    // {
    //   "Message": "The specified string is not in the form required for an e-mail address.",
    //   "Errors": [],
    //   "Code": "fatal"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.LOGIN_IN_WITH_GOOGLE_ERROR, payload: errors });
  }
}

export function* loginWithGoogleSaga() {
  yield takeLatest(authTypes.LOGIN_IN_WITH_GOOGLE_REQUEST, LoginWithGoogle);
}

/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/

function* logout() {
  yield call(api.auth.logout);
}

export function* logoutSaga() {
  yield takeLatest('/auth/LOGOUT_REQUEST', logout);
}
