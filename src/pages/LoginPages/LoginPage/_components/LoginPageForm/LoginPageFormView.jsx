import PT from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Field, Form, Formik } from 'formik';

import { style as SwitchButtonStyle } from './switch_button_style';

import { SwitchButton } from '@components/Form/SwitchButton';
import { ERROR_CODES } from '@config/errorCodes';
import { GoogleButton } from '@components/Form/GoogleButton';
import key from '@assets/login_page/key.png';
import { PasswordInput } from '@components/Form/PasswordInput';

import mail from '@assets/login_page/email_icon.png';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { responseFormikError } from '@utils/index';


const LoginPageViewForm = ({
  errorsFromBackend = [],
  loginInWithEmailRequest,
  loginInWithGoogleRequest,
  clearStoreErrors,
}) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearStoreErrors(), []);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ email: '', password: '', rememberMe: true }}
      onSubmit={values => {
        loginInWithEmailRequest(values);
        // console.log(values);
      }}
      render={({ errors, touched, isValid }) => (
        <Form>
          {errors.global &&
          <div className="formik-error error-label">{errors.global}</div>}
          {errors.googleToken &&
          <div className="formik-error error-label">{errors.googleToken}</div>}
          <Field
            type="email"
            name="email"
            placeholder="name@company.com"
            imgBefore={mail}
            component={TextInput}
            validate={validateField.email}
            addClassWrapper="pt-4 pb-4"
            addClassInputContainer="form_background"
            addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
            addClassFocusedInput="form_border_focus"
            addClassBlurredInput="form_border"
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
            addClassInputContainer="form_background"
            addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
            addClassFocusedInput="form_border_focus"
            addClassBlurredInput="form_border"
          />
          {errors.password && touched.password &&
          <div className="formik-error error-label">{errors.password}</div>}
          <Field
            name="rememberMe"
            component={SwitchButton}
            style={SwitchButtonStyle}
          />
          <button
            type="submit"
            disabled={!isValid}
            className="btn green-filled rounded p-4 full_width login-page-button mt-10"
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
        </Form>
      )}
    />
  );
};

LoginPageViewForm.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
  loginInWithEmailRequest: PT.func,
  loginInWithGoogleRequest: PT.func,
  clearStoreErrors: PT.func,
};

export default LoginPageViewForm;



