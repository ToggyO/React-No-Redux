import { useState, useEffect } from 'react';
import { parse } from 'qs';

import history from '@services/history';
import { ROUTES } from '@config/routes';

export const isEmptyObject = obj => {
  let flag = false;
  Object.keys(obj).forEach(key => {
    if (key) {
      flag = true;
    }
    return flag;
  });
  return flag;
};

// export const isEmptyObject = obj => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

export function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  return {
    width,
    height,
  };
}

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
