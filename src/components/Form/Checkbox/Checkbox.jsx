import React from 'react';
import PropTypes from 'prop-types';

// import s from './style.module.sass';

const Checkbox = ({ onClick, addClassCheckbox, addClassTitleWrapper, title, style }) => (
  <div className={addClassTitleWrapper} style={style.titleWrapper}>
    <input type="checkbox" onClick={onClick} className={addClassCheckbox} style={style.checkbox} />
    {title}
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  onClick: PropTypes.func,
  addClassCheckbox: PropTypes.string,
  addClassTitleWrapper: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
};
