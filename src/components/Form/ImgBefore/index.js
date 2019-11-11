import React from 'react';
import PT from 'prop-types';

export const ImageBefore = ({
  src,
  imageWidth,
  imageHeight,
  addWrapperClass,
  addContainerClass,
  addImgClass,
  style = {},
}) => (
  <div className={`${addWrapperClass}`} style={style.wrapper}>
    <div
      className={`${addContainerClass}`}
      style={{
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
      }}
    >
      <img
        className={addImgClass}
        src={src}
        alt="alt"
        style={{
          maxWidth: '100%',
          imageHeight: '100%',
          objectFit: 'fill',
          ...style.img,
        }}
      />
    </div>
  </div>
);

ImageBefore.propTypes = {
  src: PT.string,
  imageWidth: PT.number,
  imageHeight: PT.number,
  addWrapperClass: PT.string,
  addContainerClass: PT.string,
  addImgClass: PT.string,
  style: PT.object,
};
