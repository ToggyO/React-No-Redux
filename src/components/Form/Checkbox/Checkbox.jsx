import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ onClick, addClassCheckbox, addClassTitleWrapper, title, style }) => (
  <div
    className={addClassTitleWrapper}
    onClick={onClick}
    style={{ ...style.titleWrapper, cursor: 'pointer' }}
  >
    <input
      type="checkbox"
      className={addClassCheckbox}
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
  title: PropTypes.string,
};
