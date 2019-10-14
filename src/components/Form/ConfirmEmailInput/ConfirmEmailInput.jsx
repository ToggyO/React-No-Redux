import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import RenderCircles from './RenderCircles';

import s from './style.module.sass';

const array = [ '', '', '', '', '', '' ];


const ConfirmEmailInput = props => {
  const { name, maxLength, inputstyle } = props;

  const [state, setState] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', onInputFocus);
    return () => window.removeEventListener('keydown', onInputFocus);
  }, []);

  const onInputFocus = () => {
    return inputRef.current.focus();
  };

  const inputId = `input-${name}`;

  return (
    <div className={`${s.container} mt-4 mb-4`}>
      <label
        htmlFor={inputId}
        className={`${s.label} form_border flex p-4`}
      >
        <div className={`${s.circles} flex justify-content-space-between`}>
          {array.map((item, i) => {
            return (
              <RenderCircles key={i} item={item} color={ i < state.length ? '#495570' : '#9398A2'}/>
            )
          })}
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
          style={inputstyle}
        />
      </label>
    </div>
  );
};

export default ConfirmEmailInput;

ConfirmEmailInput.propTypes = {
  name: PropTypes.string,
  maxLength: PropTypes.number,
  inputstyle: PropTypes.object,
};
