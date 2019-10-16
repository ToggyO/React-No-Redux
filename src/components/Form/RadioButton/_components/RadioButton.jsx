import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  style = {},
  id,
}) => (
  <div style={style.container}>
    <input
      name={name}
      id={id}
      type="radio"
      value={id}
      checked={id === value}
      onChange={onChange}
      onBlur={onBlur}
      className={s.radio}
      style={{...style.radioButton, ...id === value && style.checked}}
    />
  </div>
);

export default RadioButton;

RadioButton.propTypes = {
  field: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
  id: PropTypes.string,
};
