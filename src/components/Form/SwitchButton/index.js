import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const SwitchButton = ({
  field: { name, value, onChange, onBlur },
  // form: { errors, touched, setFieldValue },
  id,
  style = {},
}) => (
  <div className={s.container} style={style.container}>
    <label htmlFor={id} className={s.switch} style={style.switch}>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={s.input}
        style={style.input}
      />
      <span className={`${s.slider} ${s.round}`} style={style.slider} />
    </label>
    <div className={s.title} style={style.title}>
      Remember Me
    </div>
  </div>
);

SwitchButton.propTypes = {
  field: PT.object,
  name: PT.string,
  id: PT.string,
  value: PT.oneOfType([PT.string, PT.bool]),
  onChange: PT.func,
  onBlur: PT.func,
  style: PT.object,
};
