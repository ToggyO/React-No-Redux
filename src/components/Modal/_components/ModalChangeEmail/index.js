import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import { ModalLabelWrapper } from '@components/Modal/_components/ModalLabelWrapper';
import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import mail from '@assets/login_page/email_icon.png';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import key from '@assets/login_page/key.png';
import { PasswordInput } from '@components/Form/PasswordInput';

export const ModalChangeEmail = ({ onClose, errorsFromBackend }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  return (
    <ModalLabelWrapper title="Change email" onClose={onClose}>
      <Formik
        ref={formikRef}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          // loginInWithEmailRequest(values);
          console.log(values);
        }}
        render={({ errors, touched, isValid }) => (
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="Enter new Email"
              imgBefore={mail}
              component={TextInput}
              validate={validateField.email}
              addClassWrapper="pt-4 pb-4"
              addClassInputContainer="form_background"
              addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
              addClassFocusedInput="form_border_focus"
              addClassBlurredInput="form_border"
            />
            {errors.email && touched.email && <div className="formik-error error-label">{errors.email}</div>}
            <Field
              name="password"
              placeholder="Enter password"
              imgBefore={key}
              component={PasswordInput}
              validate={validateField.password}
              addClassWrapper="pt-4 pb-4"
              addClassInputContainer="form_background"
              addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
              addClassFocusedInput="form_border_focus"
              addClassBlurredInput="form_border"
            />
            {errors.password && touched.password && (
              <div className="formik-error error-label">{errors.password}</div>
            )}
            <button
              type="submit"
              disabled={!isValid}
              className="btn green-filled rounded p-4 full_width login-page-button mt-10"
            >
              Sign in
            </button>
          </Form>
        )}
      />
    </ModalLabelWrapper>
  );
};

ModalChangeEmail.propTypes = {
  onClose: PT.func,
  errorsFromBackend: PT.arrayOf(PT.object),
};
