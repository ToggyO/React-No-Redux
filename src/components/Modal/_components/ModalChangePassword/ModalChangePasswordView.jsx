import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import { style as modalWrapperStyle } from '../ModalChangeEmail/modal_wrapper_style';

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import { validateField, validateForm } from '@components/Form/validations';
import key from '@assets/login_page/key.png';
import { PasswordInput } from '@components/Form/PasswordInput';
import ModalLabelWrapperContainer from '@components/Modal/_components/ModalLabelWrapper/ModalLabelWrapperContainer';

const ModalChangePasswordView = ({ onClose, errorsFromBackend, changeUserPassword, clearUserErrors }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearUserErrors(), []);

  return (
    <ModalLabelWrapperContainer label="Change password" onClose={onClose} style={modalWrapperStyle}>
      <Formik
        ref={formikRef}
        initialValues={{ oldPassword: '', password: '', passwordConfirm: '' }}
        validate={validateForm.confirmPassword}
        onSubmit={values => changeUserPassword({
          oldPassword: values.oldPassword,
          password: values.password,
        })}
        render={({ errors, touched, isValid }) => (
          <Form>
            <Field
              name="oldPassword"
              placeholder="Your password"
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
            {errors.oldPassword && touched.oldPassword && (
              <div className="formik-error error-label text-align-center">{errors.oldPassword}</div>
            )}
            <Field
              name="password"
              placeholder="New password"
              imgBefore={key}
              component={PasswordInput}
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
            <Field
              name="passwordConfirm"
              placeholder="Confirm password"
              imgBefore={key}
              component={PasswordInput}
              addClassWrapper="pt-3 pb-4"
              addClassInputContainer="form_background"
              addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
              addClassFocusedInput="form_border_focus"
              addClassBlurredInput="form_border"
              autoComplete="new-password"
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <div className="formik-error error-label text-align-center">{errors.passwordConfirm}</div>
            )}
            <button
              type="submit"
              disabled={!isValid}
              className="btn green-filled rounded p-4 full_width login-page-button mt-6"
            >
              Change
            </button>
          </Form>
        )}
      />
    </ModalLabelWrapperContainer>
  );
};

ModalChangePasswordView.propTypes = {
  onClose: PT.func,
  errorsFromBackend: PT.arrayOf(PT.object),
  changeUserPassword: PT.func,
  clearUserErrors: PT.func,
};

export default ModalChangePasswordView;
