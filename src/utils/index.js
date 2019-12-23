import { useState, useEffect } from 'react';
import { parse } from 'qs';

import { store } from '../store';

import history from '@services/history';
import { ROUTES } from '@config/routes';
import { userTypes } from '@ducks/user';
import { clearLocalState, getFromLocalState, writeToLocalState } from '@services/ls';
import { clearSessionState, getFromSessionState, writeToSessionState } from '@services/ss';
import { LOCAL_STORAGE_KEYS } from '@config/common';
import { APP_PREFIX } from '@config';

// cr-20-solved array.keys возвращает массив, его необязательно потом перебирать - .length.
// Плюс в текущей реализации эта функция не работает.
// И вроде как нигде не используется
export const isEmptyObject = obj => {
  let flag = false;
  const keys = Object.keys(obj);
  if (keys.length > 0) {
    flag = true;
  }
  return flag;
};

export function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  return {
    width,
    height,
  };
}

export const responseFormikError = (errors, errorCodes) => {
  const errorObj = {};
  errors.forEach(item => {
    if (item.field) {
      errorObj[item.field] = item.message;
    } else if (errorCodes[item.code]) {
      errorObj.global = errorCodes[item.code];
    } else {
      errorObj.global = item.message;
    }
  });
  return errorObj;
};

export const historyRedirect = route => history.replace(route);
// cr-20 когда что-то мапишь - ключи нельзя так получать, как и использовать индексы массива для ключей. https://reactjs.org/docs/lists-and-keys.html#keys
export const getUniqueKey = () => Math.ceil(Math.random() * 100000000);

export const redirectToStep = step => {
  switch (step) {
    case 1:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.CONFIRM_EMAIL;
    case 2:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.ENTER_NAME;
    case 3:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_COMPANY_NAME;
    case 5:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_TEAM;
    case 6:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.SET_FIRST_PROJECT;
    case 7:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.QUICK_TUTORIAL;
    case 8:
      return ROUTES.HOME_PAGE;
    default:
      return ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN;
  }
};

export const parseQueryString = queries => parse(queries, { ignoreQueryPrefix: true });
// cr-20-solved перепиши, используя array.reduce
export const parseRouteString = location => {
  const routeString = location.slice(1).split('/');
  const routeElements = {};
  // eslint-disable-next-line no-return-assign
  routeString.reduce((accumulator, currentValue, i) => (routeElements[i] = currentValue), routeElements);
  return routeElements;
};

export const setHeightProperty = (flag, containerRef, contentRef) => {
  const contentStyle = window.getComputedStyle(contentRef.current);
  if (!flag) {
    // eslint-disable-next-line no-param-reassign
    containerRef.current.style.height = contentStyle.height;
  } else {
    // eslint-disable-next-line no-param-reassign
    containerRef.current.style.height = 0;
  }
};

// eslint-disable-next-line no-param-reassign
export const getElementProperty = (ref, property) => window.getComputedStyle(ref.current)[property];
// cr-20 у пакета qs есть метод stringify для такого. Плюс в axios можно передать params объектом и он сам все сделает за тебя.
// Т.е. вместо axios.get(`/users?$pageSize={pageSize}&name=${name}`) можно сделать axios.get('/users/, params),
// где params это {pageSize: 10, name: 'Vasya Pimshin'}
export const makeRequestString = obj => {
  let reqString = '?';
  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      reqString += `&${key[0].toUpperCase()}${key.slice(1)}=${obj[key]}`;
    }
    return reqString;
  });
  return reqString;
};

export const firstLetterToUpperCase = text => `${text[0].toUpperCase()}${text.slice(1)}`;

export const updateUserProjects = data => {
  const { changesType, teamId, projectId } = data;
  switch (changesType) {
    case 1:
    case 0:
      return store.dispatch({
        type: userTypes.UPDATE_USER_PROJECTS_REQUEST,
        payload: { dataType: 'projects', projectId, teamId, changesType },
      });
    case -1:
      return store.dispatch({ type: userTypes.CUT_USER_PROJECT, payload: projectId });
    default:
      return changesType;
  }
};

export const writeToState = (properties, dontRemember) => {
  Object.keys(properties).forEach(key => {
    if (!dontRemember) {
      writeToLocalState(key, properties[key]);
    } else {
      writeToSessionState(key, properties[key]);
    }
  });
};

export function getFromState(key) {
  return getFromSessionState(key) || getFromLocalState(key);
}

export const clearBrowserState = properties =>
  properties.forEach(key => {
    clearLocalState(key);
    clearSessionState(key);
  });

export const checkLocalStorage = () => {
  const isAccess = Object.keys(localStorage).includes(`${APP_PREFIX}_${LOCAL_STORAGE_KEYS.ACCESS_TOKEN}`);
  const isRefresh = Object.keys(localStorage).includes(`${APP_PREFIX}_${LOCAL_STORAGE_KEYS.ACCESS_TOKEN}`);
  return isAccess && isRefresh;
};

// Users hooks
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
