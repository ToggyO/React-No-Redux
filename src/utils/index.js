import { useState, useEffect } from 'react';

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
