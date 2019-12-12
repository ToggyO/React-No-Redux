import React from 'react';
import PT from 'prop-types';

import { style as modalWrapperStyle } from './modal_wrapper_style';

import ModalLabelWrapperContainer from '@components/Modal/_components/ModalLabelWrapper/ModalLabelWrapperContainer';
import AvatarCropper from '@components/ReactCropper/AvatarCropper';


const ModalCropperPreview = ({ onClose, options = {}, changeUserAvatar }) => (
  <ModalLabelWrapperContainer label="Crop uploaded photo" onClose={onClose} style={modalWrapperStyle}>
    <AvatarCropper loadedFile={options.loadedFile} onCropDone={changeUserAvatar}/>
  </ModalLabelWrapperContainer>
);

ModalCropperPreview.propTypes = {
  onClose: PT.func,
  options: PT.oneOfType([
    PT.object,
    PT.array,
  ]),
  changeUserAvatar: PT.func,
};

export default ModalCropperPreview;
