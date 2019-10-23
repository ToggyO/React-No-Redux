import PT from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Field, Form, Formik } from 'formik';

import { ERROR_CODES } from '@config/errorCodes';

import { GoogleButton } from '@components/Form/GoogleButton';
import key from '@assets/login_page/key.png';
import { PasswordInput } from '@components/Form/PasswordInput';

import mail from '@assets/login_page/email_icon.png';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { responseFormikError } from '@utils/index';


const LoginPageViewForm = ({ errorsFromBackend, loginInWithEmailRequest, loginInWithGoogleRequest }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        loginInWithEmailRequest(values);
      }}
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
            validate={validateField.email}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4"
          />
          {errors.email && touched.email &&
          <div className="formik-error error-label">{errors.email}</div>}
          <Field
            name="password"
            placeholder="Password..."
            imgBefore={key}
            component={PasswordInput}
            validate={validateField.password}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4"
          />
          {errors.password && touched.password &&
          <div className="formik-error error-label">{errors.password}</div>}
          <button
            type="submit"
            disabled={!isValid}
            className="btn green rounded p-4 full_width login-page-button"
          >
            Sign in
          </button>
          <div
            className="p-4"
            style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or
          </div>
          <Field
            name="emailGoogle"
            component={GoogleButton}
            actionCreator={loginInWithGoogleRequest}
          />
          {errors.emailGoogle &&
          <div className="formik-error error-label">{errors.emailGoogle}</div>}
        </Form>
      )}
    />
  );
};

LoginPageViewForm.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
  loginInWithEmailRequest: PT.func,
  loginInWithGoogleRequest: PT.func,
};

export default LoginPageViewForm;



