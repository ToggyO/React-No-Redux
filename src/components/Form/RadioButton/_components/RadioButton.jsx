/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

const RadioButton = ({ field: { name, value, onChange, onBlur }, style = {}, id, withExtra }) => (
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
      style={{ ...style.radioButton, ...(id === value && style.checked) }}
    />
    {withExtra && (
      <div style={style.extra}>
        {withExtra.text && (
          <label htmlFor={id} style={{ ...style.label, ...(id === value && style.checked) }}>
            {withExtra.icon && (
              <Icon iconName={withExtra.icon} className="mb-3" fill={id === value ? 'white' : '#495570'} />
            )}
            {withExtra.text}
          </label>
        )}
      </div>
    )}
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
  withExtra: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
};
