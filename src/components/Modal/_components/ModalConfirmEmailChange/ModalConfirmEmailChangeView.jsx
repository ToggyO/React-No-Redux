import React, { useEffect } from 'react';
import PT from 'prop-types';

import { style as modalWrapperStyle } from '../ModalChangeEmail/modal_wrapper_style'

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import ModalLabelWrapperContainer from '@components/Modal/_components/ModalLabelWrapper/ModalLabelWrapperContainer';
import { ConfirmEmailInput } from '@components/Form/ConfirmEmailInput';


const ModalConfirmEmailChangeView = ({
  onClose,
  errorsFromBackend,
  confirmNewUserEmail,
  clearUserErrors,
  sendNewCodeToChangeEmail,
  clearUserExtra,
  withExtra,
}) => {
  const setErrors = errors => responseFormikError(errors, ERROR_CODES);

  useEffect(() => () => clearUserErrors(),[]);

  return (
    <ModalLabelWrapperContainer label="Confirmation code" onClose={onClose} style={modalWrapperStyle}>
      <ConfirmEmailInput
        name="token"
        maxLength={6}
        addClassWrapper="pt-4"
        errorsFromBackend={setErrors(errorsFromBackend)}
        onClick={confirmNewUserEmail}
        clearStoreErrors={clearUserErrors}
        clearExtra={clearUserExtra}
        addClassInput="default_input"
        addClassInputContainer="form_background"
        addClassFocusedInput="form_border_focus"
        addClassBlurredInput="form_border"
        buttonText="Confirm"
      />
      <div
        className="flex justify-content-center"
        style={{
          color: '#9398A2',
          fontSize: 15,
          lineHeight: '18px',
          fontWeight: 400,
        }}
      >
        <p>
          Didn’t receive a confirmation code?&nbsp;
          <button
            type="button"
            className="btn form_link"
            onClick={() => sendNewCodeToChangeEmail(withExtra)}
          >
            Click here
          </button>
        </p>
      </div>
    </ModalLabelWrapperContainer>
  );
};

ModalConfirmEmailChangeView.propTypes = {
  onClose: PT.func,
  errorsFromBackend: PT.arrayOf(PT.object),
  confirmNewUserEmail: PT.func,
  clearUserErrors: PT.func,
  withExtra: PT.oneOfType([
    PT.string,
    PT.bool,
    PT.object,
    PT.array,
  ]),
  sendNewCodeToChangeEmail: PT.func,
  clearUserExtra: PT.func,
};

export default ModalConfirmEmailChangeView;
