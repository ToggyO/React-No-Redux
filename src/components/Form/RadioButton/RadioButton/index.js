/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const RadioButton = ({
  field: { name, value, onChange, onBlur },
  style = {},
  id,
  withExtra,
  addClassContainer,
  addClassInput,
}) => (
  <div style={style.container} className={addClassContainer || ''}>
    <input
      name={name}
      id={id}
      type="radio"
      value={id}
      checked={id === value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${s.radio} ${addClassInput || ''}`}
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

RadioButton.propTypes = {
  field: PT.object,
  name: PT.string,
  value: PT.string,
  onChange: PT.func,
  onBlur: PT.func,
  style: PT.object,
  id: PT.string,
  addClassContainer: PT.string,
  addClassInput: PT.string,
  withExtra: PT.shape({
    icon: PT.string,
    text: PT.string,
  }),
};
