import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router-dom';

import { ERROR_CODES } from '@config/errorCodes';
import { parseQueryString, responseFormikError } from '@utils/index';
import { validateForm } from '@components/Form/validations';
import { PasswordInput } from '@components/Form/PasswordInput';
import key from '@assets/login_page/key.png';


const SetPasswordFormView = ({
  location = {},
  errorsFromBackend = {},
  setNewPassword,
  clearStoreErrors,
}) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearStoreErrors(), []);

  const queries = parseQueryString(location.search);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ password: '', passwordConfirm: '' }}
      validate={validateForm.confirmPassword}
      onSubmit={values => {
        setNewPassword({
          code: queries.code,
          password: values.password,
        });
      }}
      render={({ errors, touched, isValid }) => (
        <Form>
          {errors.global &&
          <div className="formik-error error-label">{errors.global}</div>}
          <Field
            name="password"
            placeholder="Enter password"
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-4 pb-2"
            addClassInput="pt-4 pb-4"
          />
          {errors.password && touched.password && <div className="formik-error error-label">{errors.password}</div>}
          <Field
            name="passwordConfirm"
            placeholder="Confirm password"
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-2 pb-6"
            addClassInput="pt-4 pb-4"
          />
          {errors.passwordConfirm && touched.passwordConfirm && <div className="formik-error error-label">{errors.passwordConfirm}</div>}
          <button
            type="submit"
            disabled={!isValid}
            className="btn green-filled rounded p-4 full_width login-page-button"
          >
            Confirm
          </button>
        </Form>
      )}
    />
  );
};

SetPasswordFormView.propTypes = {
  location: PT.object,
  errorsFromBackend: PT.arrayOf(PT.object),
  setNewPassword: PT.func,
  clearStoreErrors: PT.func,
};

export default withRouter(SetPasswordFormView);
