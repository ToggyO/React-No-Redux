import history from '@services/history';
import * as types from './types';
import { parseQueryString } from '@utils/';

export const signUpRequest = credentials => ({
  type: types.SIGNUP_REQUEST,
  payload: credentials,
});

export const signInRequest = credentials => ({
  type: types.SIGNIN_REQUEST,
  payload: credentials,
  extra: history.location.search,
});

export const smsCodeRequest = phone => ({
  type: types.SMS_CODE_REQUEST,
  payload: phone,
});

export const twoFactorAuthRequest = twoFactorCredentials => ({
  type: types.TWO_FACTOR_AUTH_REQUEST,
  payload: twoFactorCredentials,
  extra: parseQueryString(history.location.search).from,
});

export const forgotPasswordRequest = email => ({
  type: types.FORGOT_PASSWORD_REQUEST,
  payload: email,
});

export const resetPasswordRequest = data => ({
  type: types.RESET_PASSWORD_REQUEST,
  payload: data,
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});
