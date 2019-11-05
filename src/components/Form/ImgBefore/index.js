import React from 'react';
import PT from 'prop-types';

export const ImageBefore = ({ src, imageWidth, imageHeight }) => (
  <div className="flex justify-content-center align-items-center" style={{ width: 55 }}>
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

ImageBefore.propTypes = {
  src: PT.string,
  imageWidth: PT.number,
  imageHeight: PT.number,
};
