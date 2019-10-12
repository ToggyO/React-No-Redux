import React from 'react';
import PropTypes from 'prop-types';

const ImageBefore = ({ src, imageWidth, imageHeight }) => (
  <div
    className="flex justify-content-center align-items-center"
    style={{ width: 55 }}
  >
    <div
      style={{
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
      }}
    >
      <img
        src={src}
        alt="alt"
        style={{
          maxWidth: '100%',
          imageHeight: '100%',
          objectFit: 'fill',
        }}
      />
    </div>
  </div>
);


export default ImageBefore;

ImageBefore.propTypes = {
  src: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
};
