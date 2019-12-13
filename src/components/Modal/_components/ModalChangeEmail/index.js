import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import { style as modalWrapperStyle } from './modal_wrapper_style';

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import mail from '@assets/login_page/email_icon.png';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import key from '@assets/login_page/key.png';
import { PasswordInput } from '@components/Form/PasswordInput';
import ModalLabelWrapperContainer from '@components/Modal/_components/ModalLabelWrapper/ModalLabelWrapperContainer';

export const ModalChangeEmail = ({ onClose, errorsFromBackend, changeUserEmailRequest, clearUserErrors }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearUserErrors(), []);

  return (
    <ModalLabelWrapperContainer label="Change email" onClose={onClose} style={modalWrapperStyle}>
      <Formik
        ref={formikRef}
        initialValues={{ newEmail: '', password: '' }}
        onSubmit={changeUserEmailRequest}
        render={({ errors, touched, isValid }) => (
          <Form>
            {errors.global && (
              <div className="formik-error error-label text-align-center">{errors.global}</div>
            )}
            <Field
              type="email"
              name="newEmail"
              placeholder="Enter new Email"
              imgBefore={mail}
              component={TextInput}
              validate={validateField.email}
              addClassWrapper="pt-4 pb-3"
              addClassInputContainer="form_background"
              addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
              addClassFocusedInput="form_border_focus"
              addClassBlurredInput="form_border"
              autoComplete="email"
            />
            {errors.newEmail && touched.newEmail && (
              <div className="formik-error error-label text-align-center">{errors.newEmail}</div>
            )}
            <Field
              name="password"
              placeholder="Enter password"
              imgBefore={key}
              component={PasswordInput}
              validate={validateField.password}
              addClassWrapper="pt-3 pb-4"
              addClassInputContainer="form_background"
              addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
              addClassFocusedInput="form_border_focus"
              addClassBlurredInput="form_border"
              autoComplete="new-password"
            />
            {errors.password && touched.password && (
              <div className="formik-error error-label text-align-center">{errors.password}</div>
            )}
            <button
              type="submit"
              disabled={!isValid}
              className="btn green-filled rounded p-4 full_width login-page-button mt-6"
            >
              Send me the code
            </button>
          </Form>
        )}
      />
    </ModalLabelWrapperContainer>
  );
};

ModalChangeEmail.propTypes = {
  onClose: PT.func,
  errorsFromBackend: PT.arrayOf(PT.object),
  changeUserEmailRequest: PT.func,
  clearUserErrors: PT.func,
};
