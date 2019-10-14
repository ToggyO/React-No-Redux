import { FormTemplateView } from '@components/Form/FormTemplate';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import RenderCircles from './RenderCircles';

import s from './style.module.sass';

const ConfirmEmailInput = props => {
  const { name, maxLength, addClass } = props;
  const array = [...Array(maxLength)];

  const [state, setState] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', onInputFocus);
    return () => window.removeEventListener('keydown', onInputFocus);
  }, []);

  const onInputFocus = () => inputRef.current.focus();

  const inputId = `input-${name}`;

  return (
    <div className={`${s.container} ${addClass}`}>
      <label htmlFor={inputId} className={`${s.label} form_border flex p-4 mb-4`}>
        <div className={`${s.circles} flex justify-content-space-between`}>
          {array.map((item, i) => (
            <RenderCircles key={i} item={item} color={i < state.length ? '#495570' : '#9398A2'} />
          ))}
        </div>
        <input
          type="text"
          name={name}
          id={inputId}
          className="default_input"
          ref={inputRef}
          value={state}
          onChange={e => setState(e.target.value.replace(/\D/, ''))}
          maxLength={maxLength}
          style={{ width: 0, height: 0 }}
        />
      </label>
      <button
        type="submit"
        disabled={state.length !== maxLength}
        className="btn green rounded p-4 full_width login-page-button"
      >
        Next
      </button>
    </div>
  );
};

export default ConfirmEmailInput;

ConfirmEmailInput.propTypes = {
  addClass: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
};
