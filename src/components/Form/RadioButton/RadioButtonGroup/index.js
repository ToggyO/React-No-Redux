import React from 'react';
import PT from 'prop-types';

export const RadioButtonGroup = ({
  label,
  addWrapperClass,
  addLabelClass,
  addChildrenContainerClass,
  labelStyle,
  children,
}) => (
  <div className={addWrapperClass}>
    <legend className={addLabelClass} style={labelStyle}>
      {label}
    </legend>
    <div className={addChildrenContainerClass}>{children}</div>
  </div>
);

RadioButtonGroup.propTypes = {
  label: PT.string,
  addWrapperClass: PT.string,
  addLabelClass: PT.string,
  addChildrenContainerClass: PT.string,
  labelStyle: PT.object,
  children: PT.array,
};
