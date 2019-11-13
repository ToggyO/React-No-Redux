import React, { useState, useRef, useEffect } from 'react';
import PT from 'prop-types';

import { RenderCircles } from './_components/RenderCircles';

import s from './style.module.sass';

export const ConfirmEmailInput = props => {
  const { name, maxLength, addClassWrapper, errorsFromBackend = {}, onClick, ...rest } = props;
  const array = [...Array(maxLength)];

  const [state, setState] = useState('');
  const inputRef = useRef(null);
  const [isFocused, setFocus] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', onInputFocus);
    return () => window.removeEventListener('keydown', onInputFocus);
  }, []);

  const inputId = `input-${name}`;

  const onInputFocus = () => inputRef.current.focus();

  const customHandleFocus = () => setFocus(true);

  const customHandleBlur = () => setFocus(false);

  return (
    <div className={`${s.container} ${addClassWrapper}`}>
      <label
        htmlFor={inputId}
        className={`${s.label} form_background ${isFocused ? 'form_border_focus' : 'form_border'} ${
          errorsFromBackend.global ? 'error' : null
        } flex p-4 mb-4`}
      >
        <div className={`${s.circles} flex justify-content-space-between`}>
          {array.map((item, i) => (
            <RenderCircles key={i} item={item} color={i < state.length ? '#495570' : '#9398A2'} />
          ))}
        </div>
        <input
          type="text"
          name={name}
          id={inputId}
          className="default_input pl-0"
          ref={inputRef}
          value={state}
          onChange={e => setState(e.target.value.replace(/\D/, ''))}
          onFocus={customHandleFocus}
          onBlur={customHandleBlur}
          maxLength={maxLength}
          style={{ width: 0, height: 0 }}
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </label>
      {errorsFromBackend.global && <div className="formik-error error-label">{errorsFromBackend.global}</div>}
      <button
        type="submit"
        disabled={state.length !== maxLength}
        className="btn green-filled rounded p-4 full_width login-page-button"
        onClick={() => {
          onClick({ code: state });
          rest.clearExtra();
        }}
      >
        Next
      </button>
    </div>
  );
};

ConfirmEmailInput.propTypes = {
  addClassWrapper: PT.string,
  name: PT.string,
  maxLength: PT.number,
  errorsFromBackend: PT.object,
  onClick: PT.func,
};
