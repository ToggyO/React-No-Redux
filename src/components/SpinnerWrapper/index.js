import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

export const SpinnerWrapper = ({ children, loading, size }) => (
  <Spin size={size} spinning={loading}>
    {children}
  </Spin>
);

SpinnerWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

SpinnerWrapper.defaultProps = {
  loading: false,
  size: 'large',
};
