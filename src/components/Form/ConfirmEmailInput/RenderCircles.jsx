import React from 'react';
import PropTypes from 'prop-types';

const RenderCircles = ({ item, color }) => (
  <div className="flex justify-content-center align-items-center" style={{ padding: 27 }}>
    <div style={{ borderRadius: '50%', backgroundColor: color, width: 14, height: 14 }}>{item}</div>
  </div>
);

export default RenderCircles;

RenderCircles.propTypes = {
  item: PropTypes.string,
  color: PropTypes.string,
};