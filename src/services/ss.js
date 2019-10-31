/* eslint-disable no-useless-catch */
import { APP_PREFIX } from '@config';

export function writeToSessionState(key, state) {
  try {
    sessionStorage.setItem(`${APP_PREFIX}_${key}`, JSON.stringify(state));
  } catch (e) {
    throw e;
  }
}

export function getFromSessionState(key) {
  let state;

  try {
    state = JSON.parse(sessionStorage.getItem(`${APP_PREFIX}_${key}`));
  } catch (e) {
    throw e;
  }

  return state;
}

export function clearSessionState(key) {
  try {
    sessionStorage.removeItem(`${APP_PREFIX}_${key}`);
  } catch (e) {
    throw e;
  }
}
