import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

const Checkbox = ({ onClick, addClassCheckbox, addClassTitleWrapper, title, style }) => (
  <div
    className={`${s.container} ${addClassTitleWrapper}`}
    onClick={onClick}
    style={{ ...style.titleWrapper, cursor: 'pointer' }}
  >
    <input
      type="checkbox"
      className={`${s.input} ${addClassCheckbox}`}
      style={{ ...style.checkbox,  cursor: 'pointer' }}
    />
    {title}
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  onClick: PropTypes.func,
  addClassCheckbox: PropTypes.string,
  addClassTitleWrapper: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};
