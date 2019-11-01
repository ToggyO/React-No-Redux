import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

const SwitchButton = ({
  field: { name, value, onChange, onBlur },
  // form: { errors, touched, setFieldValue },
  id,
  style = {},
}) => {
  return (
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
        <span className={`${s.slider} ${s.round}`} style={style.slider}/>
      </label>
      <div className={s.title} style={style.title}>Remember Me</div>
    </div>
  )
};

SwitchButton.propTypes = {
  field: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
};

export default SwitchButton;

