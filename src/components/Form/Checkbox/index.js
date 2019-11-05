import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const Checkbox = ({
  state,
  onClick,
  addClassCheckbox,
  addClassTitleWrapper,
  title,
  style,
  icon,
  iconStyle,
  iconChecked,
  iconCheckedStyle,
}) => (
  <div
    className={`${s.container} ${addClassTitleWrapper}`}
    onClick={onClick}
    style={{ ...style.titleWrapper, cursor: 'pointer' }}
  >
    {state && (icon || iconChecked) ? (
      <Icon iconName={iconChecked} className={iconCheckedStyle} />
    ) : (
      <Icon iconName={icon} className={iconStyle} />
    )}
    <input
      type="checkbox"
      className={`${s.input} ${addClassCheckbox}`}
      style={{ ...style.checkbox, cursor: 'pointer' }}
    />
    {title}
  </div>
);

Checkbox.propTypes = {
  state: PT.bool,
  onClick: PT.func,
  addClassCheckbox: PT.string,
  addClassTitleWrapper: PT.string,
  style: PT.object,
  title: PT.oneOfType([PT.string, PT.node]),
  icon: PT.string,
  iconStyle: PT.string,
  iconChecked: PT.string,
  iconCheckedStyle: PT.string,
};

// const Checkbox = ({ onClick, addClassCheckbox, addClassTitleWrapper, title, style }) => (
//   <div
//     className={`${s.container} ${addClassTitleWrapper}`}
//     onClick={onClick}
//     style={{ ...style.titleWrapper, cursor: 'pointer' }}
//   >
//     <input
//       type="checkbox"
//       className={`${s.input} ${addClassCheckbox}`}
//       style={{ ...style.checkbox,  cursor: 'pointer' }}
//     />
//     {title}
//   </div>
// );
