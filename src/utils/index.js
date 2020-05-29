import { useState, useEffect } from 'react';
import { parse } from 'qs';

import history from '@services/history';
import { clearLocalState, getFromLocalState, writeToLocalState } from '@services/ls';
import { clearSessionState, getFromSessionState, writeToSessionState } from '@services/ss';
import { LS_KEYS } from '@config/common';
import { APP_PREFIX } from '@config';

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

export const getUniqueKey = () => Math.ceil(Math.random() * 100000000);

export const parseQueryString = queries => parse(queries, { ignoreQueryPrefix: true });

export const parseRouteString = location => {
  const routeString = location.slice(1).split('/');
  const routeElements = {};
  // eslint-disable-next-line no-return-assign
  routeString.reduce((accumulator, currentValue, i) => (routeElements[i] = currentValue), routeElements);
  return routeElements;
};

// eslint-disable-next-line no-param-reassign
export const getElementProperty = (ref, property) => window.getComputedStyle(ref.current)[property];

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

export const writeToState = (properties, dontRemember) => {
  Object.keys(properties).forEach(key => {
    if (dontRemember) {
      return writeToSessionState(key, properties[key]);
    }
    return writeToLocalState(key, properties[key]);
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
  const isAccess = Object.keys(localStorage).includes(`${APP_PREFIX}_${LS_KEYS.ACCESS_TOKEN}`);
  const isRefresh = Object.keys(localStorage).includes(`${APP_PREFIX}_${LS_KEYS.ACCESS_TOKEN}`);
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

export const getPageTitle = ({
  pathname,
  // breadcrumb,
}) => {
  if (pathname === '/') {
    return ' - Home';
  }
  return ` - ${pathname[1].toUpperCase()}${pathname.slice(2)}`;
};

export const getMenuHeadlines = pathname => {
  if (pathname === '/') {
    return 'Home';
  }
  return `${pathname[1].toUpperCase()}${pathname.slice(2)}`;
};
