/* eslint-disable no-useless-catch */
import { APP_PREFIX } from '@config';

export function writeToLocalState(key, state) {
  try {
    localStorage.setItem(`${APP_PREFIX}_${key}`, JSON.stringify(state));
  } catch (e) {
    throw e;
  }
}

export function getFromLocalState(key) {
  let state;

  try {
    state = localStorage.getItem(`${APP_PREFIX}_${key}`);
  } catch (e) {
    throw e;
  }

  return state;
}

export function clearLocalState(key) {
  try {
    localStorage.removeItem(`${APP_PREFIX}_${key}`);
  } catch (e) {
    throw e;
  }
}
