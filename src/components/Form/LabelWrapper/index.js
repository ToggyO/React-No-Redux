/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PT from 'prop-types';

import style from './style.module.sass';

export const LabelWrapper = props => {
  const { label, errors, touched, field, inputId, children, addClassLabel } = props;

  return (
    <div className={style.wrapper}>
      <label
        htmlFor={inputId}
        className={`${style.label} ${addClassLabel} ${
          errors[field.name] && touched[field.name] ? 'error-label' : null
        }`}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

LabelWrapper.propTypes = {
  label: PT.string,
  errors: PT.object,
  touched: PT.object,
  field: PT.object,
  inputId: PT.string,
  children: PT.element,
  addClassLabel: PT.string,
};
