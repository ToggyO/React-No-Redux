import React, { useState } from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';


const ConfirmEmailInput = props => {

  const [state, setState] = useState('');

  const { name, maxLength, inputstyle } = props;

  const inputId = `input-${name}`;

  return (
    <div className={`${s.container} mt-4 mb-4`}>
      <label
        htmlFor={inputId}
        className={`${s.label} form_border flex`}
      >
        <input
          type="text"
          name={name}
          id={inputId}
          className="default_input"
          value={state}
          onChange={e => setState(e.target.value)}
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
