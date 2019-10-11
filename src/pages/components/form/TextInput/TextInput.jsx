import React from 'react';

import { FormTemplateView } from '../FormTemplate';
import { ErrorWrapper } from '../ErrorWrapper';

import s from './style.module.sass';

const TextInput = (props) => {
  const {
    label,
    type,
    placeholder,
    name,
    onChange,
    onBlur,
    error,
    visited,
    style,
    value,
  } = props;

  const inputId = `input-${name}`;

  return (
    <ErrorWrapper
      label={label}
      error={error}
      visited={visited}
      inputId={inputId}
    >
      <div className={`${s.text_input} ${error && visited ? 'error' : null}`}>
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          style={style}
        />
      </div>
    </ErrorWrapper>
  );
};

export default TextInput;
