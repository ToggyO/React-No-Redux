import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.sass';

const LabelWrapper = (props) => {
  const {
    label,
    errors,
    touched,
    field,
    inputId,
    children,
  } = props;

  return (
    <div className={style.wrapper}>
      <label
        htmlFor={inputId}
        className={`${style.label} ${errors[field.name] && touched[field.name] ? 'error-label' : null}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default LabelWrapper;

LabelWrapper.propTypes = {
  label: PropTypes.string,
  errors: PropTypes.object,
  touched: PropTypes.object,
  field: PropTypes.object,
  inputId: PropTypes.string,
  children: PropTypes.element,
};
