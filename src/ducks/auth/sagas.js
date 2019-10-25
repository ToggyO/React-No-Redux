import { takeLatest, put, call } from 'redux-saga/effects';

import * as authTypes from './types';

import { ROUTES } from '@config';

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
    //   "data": {
    //    "user": {},
    //    "token":{},
    //   },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.signUpWithEmail, action.payload);
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_SUCCESS, payload: data });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL);
  } catch (error) {
    // {
    //   "message": "Business Conflic",
    //   "errors": [],
    //   "data": null
    //   "code": "business_conflict"
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
    //   "data": {
    //    "user": {},
    //    "token":{},
    //   },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.signUpWithGoogle, action.payload);
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_SUCCESS, payload: data });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.ENTER_NAME);
  } catch (error) {
    // {
    //   "message": "Forbidden",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.forbidden"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.SIGNUP_WITH_EMAIL_ERROR, payload: errors });
  }
}

export function* signUpWithGoogleSaga() {
  yield takeLatest(authTypes.SIGNUP_WITH_GOOGLE_REQUEST, signUpWithGoogle);
}

function* LoginWithEmail(action) {
  try {
    // {
    //   "data": {
    //    "user": {},
    //    "token":{},
    //   },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.loginWithEmail, action.payload);
    yield put({ type: authTypes.LOGIN_IN_WITH_EMAIL_SUCCESS, payload: data });
    yield call(historyRedirect, ROUTES.HOME_PAGE);
  } catch (error) {
    // {
    //   "message": "Unauthorized",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.security_error"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.LOGIN_IN_WITH_EMAIL_ERROR, payload: errors });
  }
}

export function* loginWithEmailSaga() {
  yield takeLatest(authTypes.LOGIN_IN_WITH_EMAIL_REQUEST, LoginWithEmail);
}

function* LoginWithGoogle(action) {
  try {
    // {
    //   "data": {
    //    "user": {},
    //    "token":{},
    //   },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    const data = yield call(api.auth.loginWithGoogle, action.payload);
    yield put({ type: authTypes.LOGIN_IN_WITH_GOOGLE_SUCCESS, payload: data });
    yield call(historyRedirect, ROUTES.HOME_PAGE);
  } catch (error) {
    // {
    //   "message": "Unauthorized",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.security_error"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.LOGIN_IN_WITH_GOOGLE_ERROR, payload: errors });
  }
}

export function* loginWithGoogleSaga() {
  yield takeLatest(authTypes.LOGIN_IN_WITH_GOOGLE_REQUEST, LoginWithGoogle);
}

function* confirmEmail(action) {
  try {
    // {
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    yield call(api.auth.confirmEmail, action.payload);
    yield put({ type: authTypes.CONFIRM_EMAIL_SUCCESS });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.ENTER_NAME);
  } catch (error) {
    // {
    //   "message": "Unauthorized",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.security_error"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.CONFIRM_EMAIL_ERROR, payload: errors });
  }
}

export function* confirmEmailSaga() {
  yield takeLatest(authTypes.CONFIRM_EMAIL_REQUEST, confirmEmail);
}

function* setUserName(action) {
  try {
    // {
    //   "data": {
    //    "id": "string",
    //    "name": "string",
    //    "email": "string",
    //   },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    yield call(api.auth.setUserName, action.payload);
    yield put({ type: authTypes.SET_USER_NAME_SUCCESS });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_COMPANY_NAME);
  } catch (error) {
    // {
    //   "message": "Unauthorized",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.security_error"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.SET_USER_NAME_ERROR, payload: errors });
  }
}

export function* setUserNameSaga() {
  yield takeLatest(authTypes.SET_USER_NAME_REQUEST, setUserName);
}

function* setCompanyName(action) {
  try {
    // {
    //   "data": {
    //    "id": "string",
    //    "name": "string",
    //   },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    yield call(api.auth.setCompanyName, action.payload);
    yield put({ type: authTypes.SET_COMPANY_NAME_SUCCESS });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_TEAM);
  } catch (error) {
    // {
    //   "message": "Unauthorized",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.security_error"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.SET_COMPANY_NAME_ERROR, payload: errors });
  }
}

export function* setCompanyNameSaga() {
  yield takeLatest(authTypes.SET_COMPANY_NAME_REQUEST, setCompanyName);
}

function* setTeam(action) {
  try {
    // {
    //   "data": {
    //   "stepName": "string",
    //     "step": "number",
    //     "data": {
    //     "id": "string",
    //       "name": "string"
    //   }
    // },
    //   "httpStatusCode": 100,
    //   "isSuccess": true,
    //   "code": "success"
    // }
    yield call(api.auth.setTeam, action.payload);
    yield put({ type: authTypes.SET_TEAM_SUCCESS });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_FIRST_PROJECT);
  } catch (error) {
    // {
    //   "message": "Unauthorized",
    //   "errors": [],
    //   "data": null
    //   "code": "sec.security_error"
    // }
    const { errors } = error.response.data;
    yield put({ type: authTypes.SET_TEAM_ERROR, payload: errors });
  }
}

export function* setTeamSaga() {
  yield takeLatest(authTypes.SET_TEAM_REQUEST, setTeam);
}

/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/

function* setFirstProject(action) {
  try {
    const data = yield call(api.auth.setFirstProject, action.payload);
    yield put({ type: authTypes.SET_FIRST_PROJECT_SUCCESS, payload: data });
    yield call(historyRedirect, ROUTES.AUTH.ROOT + ROUTES.AUTH.QUICK_TUTORIAL);
  } catch (error) {
    const { errors } = error.response.data;
    yield put({ type: authTypes.SET_FIRST_PROJECT_ERROR, payload: errors });
  }
}

export function* setFirstProjectSaga() {
  yield takeLatest(authTypes.SET_FIRST_PROJECT_REQUEST, setFirstProject);
}
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/

function* logout() {
  yield call(api.auth.logout);
}

export function* logoutSaga() {
  yield takeLatest('/auth/LOGOUT_REQUEST', logout);
}
