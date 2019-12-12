import React from 'react';

import ModalLabelWrapperContainer from '@components/Modal/_components/ModalLabelWrapper/ModalLabelWrapperContainer';

// eslint-disable-next-line react/prop-types
export const ModalChangePasswordSuccess = ({ onClose }) => (
  <ModalLabelWrapperContainer label="Change password" onClose={onClose}>
    1
  </ModalLabelWrapperContainer>
);
