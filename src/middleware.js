/* eslint-disable no-unused-vars */
import { authTypes } from '@ducks/auth';
import { userTypes } from '@ducks/user';
import { socketTypes } from '@ducks/sockets';
import { writeToLocalState } from '@services/ls';
import { userLogout } from '@services/auth';
import { LOCAL_STORAGE_KEYS } from '@config';
import { writeToSessionState } from '@services/ss';
import { SOCKET_METHODS } from '@config/socketMethods';
import { checkLocalStorage, updateUserProjects, writeToState } from '@utils/index';

// cr-20-solved switch(action.type) и погнали
export const saveUserData = store => next => action => {
  switch (action.type) {
    case authTypes.SIGNUP_WITH_EMAIL_SUCCESS:
    case authTypes.SIGNUP_WITH_GOOGLE_SUCCESS:
    case authTypes.LOGIN_IN_WITH_EMAIL_SUCCESS:
    case authTypes.LOGIN_IN_WITH_GOOGLE_SUCCESS:
    case authTypes.SET_PASSWORD_INVITE_SUCCESS: {
      const { data, dontRemember } = action.payload;
      const { user, token, registrationStep } = data; // например remember: true false
      const { accessToken, refreshToken } = token;
      // cr-20-solved надо абстрагировать в одну функцию, которая по флагу remember будет решать куда писать - в local или session
      // (избавишься от экшенов REMEMBER_ME), и вызывать ее один раз, передавая объект свойств для записи пачкой
      // (функция так же может принимать одно свойство, не оборачивая в объект). writeToState(properties, remember)
      writeToState(
        {
          [LOCAL_STORAGE_KEYS.USER]: user,
          [LOCAL_STORAGE_KEYS.ACCESS_TOKEN]: accessToken,
          [LOCAL_STORAGE_KEYS.REFRESH_TOKEN]: refreshToken,
          [LOCAL_STORAGE_KEYS.REGISTER_STEP]: registrationStep,
        },
        dontRemember
      );
      break;
    }
    default:
      break;
  }
  return next(action);
};

export const updateUsersData = store => next => action => {
  switch (action.type) {
    case authTypes.SET_USER_NAME_SUCCESS: {
      const { data } = action.payload.data;
      if (checkLocalStorage()) {
        writeToLocalState(LOCAL_STORAGE_KEYS.USER, data);
      } else {
        writeToSessionState(LOCAL_STORAGE_KEYS.USER, data);
      }
      break;
    }
    case userTypes.UPDATE_USER_DATA_SUCCESS:
    case userTypes.CONFIRM_NEW_USER_EMAIL_SUCCESS:
    case userTypes.CHANGE_USER_AVATAR_SUCCESS: {
      if (checkLocalStorage()) {
        writeToLocalState(LOCAL_STORAGE_KEYS.USER, action.payload);
      } else {
        writeToSessionState(LOCAL_STORAGE_KEYS.USER, action.payload);
      }
      break;
    }
    default:
      break;
  }
  return next(action);
};

export const clearUserData = store => next => action => {
  if (action.type === authTypes.LOGOUT) userLogout();
  return next(action);
};

export const saveRegistrationStep = store => next => action => {
  switch (action.type) {
    case authTypes.CONFIRM_EMAIL_SUCCESS:
    case authTypes.SET_USER_NAME_SUCCESS:
    case authTypes.SET_COMPANY_NAME_SUCCESS:
    case authTypes.SET_TEAM_SUCCESS:
    case authTypes.SET_FIRST_PROJECT_SUCCESS:
    case authTypes.REGISTRATION_DONE_SUCCESS: {
      const { registrationStep } = action.payload.data;
      writeToLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP, registrationStep);
      writeToSessionState(LOCAL_STORAGE_KEYS.REGISTER_STEP, registrationStep);
      break;
    }
    default:
      break;
  }
  return next(action);
};

export const watchNotificationUpdates = store => next => action => {
  if (action.type === socketTypes.SUBSCRIBE_ON_NOTIFICATIONS_SUCCESS) {
    const { watchMethod, payload } = action.payload;
    switch (watchMethod) {
      case SOCKET_METHODS.BROADCAST.SIDEBAR_BROADCAST:
        return updateUserProjects(payload);
      default:
        break;
    }
  }
  return next(action);
};
