import React from 'react';

import style from './style.module.sass';

const ErrorWrapper = (props) => {
  const {
    label,
    error,
    visited,
    inputId,
    children,
  } = props;

  return (
    <div className={style.error_wrapper}>
      <label
        htmlFor={inputId}
        className={`${style.error_wrapper__label} ${error && visited ? 'error-label' : null}`}
      >
        {label}
      </label>
      {children}
      { error && visited && <div className={style.error_wrapper__error}>{error}</div>}
    </div>
  );
};


export default ErrorWrapper;
