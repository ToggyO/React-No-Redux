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

export const parseRouteString = location => {
  const routeString = location.slice(1).split('/');
  let routeElements = {};
  // eslint-disable-next-line no-return-assign
  routeString.map((item, i) => (routeElements = { ...routeElements, [i]: item }));
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

// export const isEmptyObject = obj => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };
