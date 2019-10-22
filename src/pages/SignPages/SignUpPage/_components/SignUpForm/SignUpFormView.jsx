import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import { responseFormikError } from '@utils/index';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { GoogleButton } from '@components/Form/GoogleButton';

import mail from '@assets/login_page/email_icon.png';


// eslint-disable-next-line react/prop-types
const SignUpFormView = ({ errorsFromBackend, signUpWithEmailRequest, signUpWithGoogleRequest }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend));
  }, [errorsFromBackend]);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ email: '' }}
      onSubmit={values => {
        signUpWithEmailRequest(values);
      }}
      render={({ errors, touched, isValid }) => (
        <Form>
          <Field
            name="googleEmail"
            component={GoogleButton}
            actionCreator={signUpWithGoogleRequest}
          />
          {errors.googleEmail && <div className="formik-error error-label">{errors.googleEmail}</div>}
          <span style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or</span>
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
          {errors.email && touched.email && <div className="formik-error error-label">{errors.email}</div>}
          <button
            type="submit"
            disabled={!isValid}
            className="btn green rounded p-4 full_width login-page-button"
          >
              Continue with email
          </button>
        </Form>
      )}
    />
  );
};

SignUpFormView.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
};

export default SignUpFormView;
