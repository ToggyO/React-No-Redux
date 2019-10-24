import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import { PasswordInput } from '@components/Form/PasswordInput';
import key from '@assets/login_page/key.png';
import { ERROR_CODES } from '@config/errorCodes';
import { responseFormikError } from '@utils/index';
import { TextInput } from '@components/Form/TextInput';
import { validateForm } from '@components/Form/validations';
import { GoogleButton } from '@components/Form/GoogleButton';

import mail from '@assets/login_page/email_icon.png';


// eslint-disable-next-line react/prop-types
const SignUpFormView = ({ errorsFromBackend, signUpWithEmailRequest, signUpWithGoogleRequest }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ email: '', password: '', passwordConfirm: '' }}
      validate={validateForm.confirmSignUp}
      onSubmit={values => signUpWithEmailRequest(values)}
      render={({ errors, touched, isValid }) => (
        <Form>
          {errors.global &&
          <div className="formik-error error-label">{errors.global}</div>}
          <Field
            type="email"
            name="email"
            placeholder="name@company.com"
            imgBefore={mail}
            component={TextInput}
            addClassWrapper="pt-4 pb-2"
            addClassInput="pt-4 pb-4"
          />
          {errors.email && touched.email && <div className="formik-error error-label">{errors.email}</div>}
          <Field
            name="password"
            placeholder="Password..."
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-2 pb-2"
            addClassInput="pt-4 pb-4"
          />
          {errors.password && touched.password && <div className="formik-error error-label">{errors.password}</div>}
          <Field
            name="passwordConfirm"
            placeholder="Confirm password..."
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-2 pb-4"
            addClassInput="pt-4 pb-4"
          />
          {errors.passwordConfirm && touched.passwordConfirm && <div className="formik-error error-label">{errors.passwordConfirm}</div>}
          <button
            type="submit"
            disabled={!isValid}
            className="btn green-filled rounded p-4 full_width login-page-button"
          >
              Continue with email
          </button>
          <div
            className="p-4"
            style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or
          </div>
          <Field
            name="googleEmail"
            component={GoogleButton}
            actionCreator={signUpWithGoogleRequest}
          />
          {errors.googleEmail && <div className="formik-error error-label">{errors.googleEmail}</div>}
        </Form>
      )}
    />
  );
};

SignUpFormView.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
};

export default SignUpFormView;
