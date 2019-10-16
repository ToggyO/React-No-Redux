import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonGroup = ({
  label,
  addWrapperClass,
  addLabelClass,
  addChildrenContainerClass,
  labelStyle,
  children,
}) => (
  <div className={addWrapperClass}>
    <legend className={addLabelClass} style={labelStyle}>{label}</legend>
    <div className={addChildrenContainerClass}>
      {children}
    </div>
  </div>
);

export default RadioButtonGroup;

RadioButtonGroup.propTypes = {
  label: PropTypes.string,
  addWrapperClass: PropTypes.string,
  addLabelClass: PropTypes.string,
  addChildrenContainerClass: PropTypes.string,
  labelStyle: PropTypes.object,
  children: PropTypes.array,
};
