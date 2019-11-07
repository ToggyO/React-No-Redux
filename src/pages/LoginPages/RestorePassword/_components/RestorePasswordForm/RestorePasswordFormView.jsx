import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';

import { ERROR_CODES } from '@config/errorCodes';
import { responseFormikError } from '@utils/index';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';

import mail from '@assets/login_page/email_icon.png';


const RestorePasswordFormView = ({ errorsFromBackend, restorePassword }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ email: '' }}
      onSubmit={values => {
        restorePassword(values);
        console.log(values)
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
            addClassWrapper="pt-4 pb-6"
            addClassInput="pt-4 pb-4"
          />
          {errors.email && touched.email &&
          <div className="formik-error error-label">{errors.email}</div>}
          <button
            type="submit"
            disabled={!isValid}
            className="btn green-filled rounded p-4 full_width login-page-button"
          >
            Send me a link
          </button>
        </Form>
      )}
    />
  );
};

RestorePasswordFormView.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
  restorePassword: PT.func,
};

export default RestorePasswordFormView;
