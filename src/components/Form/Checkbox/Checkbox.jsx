import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';


const Checkbox = ({
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
    {state && (icon || iconChecked)
      ? <Icon iconName={iconChecked} className={iconCheckedStyle}/>
      : <Icon iconName={icon} className={iconStyle}/>}
    <input
      type="checkbox"
      className={`${s.input} ${addClassCheckbox}`}
      style={{ ...style.checkbox, cursor: 'pointer' }}
    />
    {title}
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func,
  addClassCheckbox: PropTypes.string,
  addClassTitleWrapper: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  icon: PropTypes.string,
  iconStyle: PropTypes.string,
  iconChecked: PropTypes.string,
  iconCheckedStyle: PropTypes.string,
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
