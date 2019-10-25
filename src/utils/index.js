import { useState, useEffect } from 'react';

import history from '@services/history';

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

export const historyRedirect = route => {
  history.replace(route);
};

export const getUniqueKey = () => Math.ceil(Math.random() * 100000000);
