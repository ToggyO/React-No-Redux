import React from 'react';
import PT from 'prop-types';
import Cropper from 'react-cropper';

import s from './style.module.sass';
import 'cropperjs/dist/cropper.css';

class AvatarCropper extends React.Component {
  constructor(props) {
    super(props);
    this.cropper = React.createRef();
  }

  crop() {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    const url = this.cropper
      .getCroppedCanvas()
      .toDataURL()
      .split(';base64,');
    this.props.setImageLoaded(false);
    this.props.onCropDone({
      contentType: url[0].slice(5),
      bytes: url[1],
    });
  }

  render() {
    const { loadedFile } = this.props;

    /* eslint-disable react/jsx-boolean-value */
    return (
      <div className="react-cropper">
        <Cropper
          ref={cropper => {
            this.cropper = cropper;
          }}
          src={loadedFile}
          style={{ maxHeight: 410, height: 410, maxWidth: 708, width: '100%', paddingBottom: 24 }}
          aspectRatio={1}
          guides={true}
          responsive={true}
          modal={true}
          center={true}
          autoCrop={true}
          autoCropArea={1}
          zoomable={false}
          viewMode={1}
          // preview=".img-preview"
        />
        <div className="react-cropper__button flex justify-content-center mt-6">
          <button
            type="button"
            className={`${s.save} btn green-filled rounded pt-4 pb-4 mb-0 full_width`}
            onClick={this.crop.bind(this)}
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

AvatarCropper.propTypes = {
  loadedFile: PT.oneOfType([PT.object, PT.array, PT.string]),
  onCropDone: PT.func,
  setImageLoaded: PT.func,
};

export default AvatarCropper;
