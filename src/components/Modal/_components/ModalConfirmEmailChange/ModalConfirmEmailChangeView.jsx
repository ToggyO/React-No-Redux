import React, { useEffect } from 'react';
import PT from 'prop-types';

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import ModalLabelWrapperContainer from '@components/Modal/_components/ModalLabelWrapper/ModalLabelWrapperContainer';
import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';


const ModalConfirmEmailChangeView = ({ onClose, errorsFromBackend, confirmNewUserEmail, clearUserErrors }) => {
  const setErrors = errors => responseFormikError(errors, ERROR_CODES);

  useEffect(() => () => clearUserErrors(),[]);

  return (
    <ModalLabelWrapperContainer label="Confirmation code" onClose={onClose}>
      <ConfirmEmailInput
        name="token"
        maxLength={6}
        addClassWrapper="pt-4 pb-4"
        errorsFromBackend={setErrors(errorsFromBackend)}
        onClick={confirmNewUserEmail}
        clearStoreErrors={clearUserErrors}
        // clearExtra={clearExtra}
        addClassInput="default_input"
        addClassInputContainer="form_background"
        addClassFocusedInput="form_border_focus"
        addClassBlurredInput="form_border"
        buttonText="Confirm"
      />
    </ModalLabelWrapperContainer>
  );
};

ModalConfirmEmailChangeView.propTypes = {
  onClose: PT.func,
  errorsFromBackend: PT.arrayOf(PT.object),
  confirmNewUserEmail: PT.func,
  clearUserErrors: PT.func,
};

export default ModalConfirmEmailChangeView;
