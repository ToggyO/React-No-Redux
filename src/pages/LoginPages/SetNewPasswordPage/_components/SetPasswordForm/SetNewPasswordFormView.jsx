import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';

import history from '@services/history';
import { ERROR_CODES } from '@config/errorCodes';
import { parseQueryString, responseFormikError } from '@utils/index';
import { validateForm } from '@components/Form/validations';
import { PasswordInput } from '@components/Form/PasswordInput';
import key from '@assets/login_page/key.png';
import superaxios from '@services/superaxios';
import { API_URL } from '@config/apiUrl';
import { ROUTES } from '@config/routes';
import { withAuthLoader } from '@components/HOC/withAuthLoader';
import { withModal } from '@components/HOC/withModal';
import { MODAL_KEYS } from '@config/common';


const SetNewPasswordFormView = ({
  location = {},
  errorsFromBackend = [],
  setNewPassword,
  clearStoreErrors,
  loaderStart,
  loaderStop,
  modalOpen,
}) => {
  const formikRef = useRef(null);
  const queries = parseQueryString(location.search);

  const validateCode = async () => {
    try {
      loaderStart();
      await superaxios.get(`${API_URL.AUTH.VALIDATE_LINK_CODE}?code=${queries.code}`);
      loaderStop();
    } catch (error) {
      loaderStop();
      history.push(ROUTES.AUTH.ROOT + ROUTES.AUTH.LOGIN_IN);
      modalOpen(MODAL_KEYS.DEPRECATED_LINK_MESSAGE);
    }
  };

  useEffect(() => {
    validateCode();
  },[]);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearStoreErrors(), []);

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
            addClassInputContainer="form_background"
            addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
            addClassFocusedInput="form_border_focus"
            addClassBlurredInput="form_border"
          />
          {errors.password && touched.password && <div className="formik-error error-label">{errors.password}</div>}
          <Field
            name="passwordConfirm"
            placeholder="Confirm password"
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-2 pb-6"
            addClassInputContainer="form_background"
            addClassInput="default_input pt-4 pb-4 pl-14 pr-13"
            addClassFocusedInput="form_border_focus"
            addClassBlurredInput="form_border"
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

SetNewPasswordFormView.propTypes = {
  location: PT.object,
  errorsFromBackend: PT.arrayOf(PT.object),
  setNewPassword: PT.func,
  clearStoreErrors: PT.func,
  loaderStart: PT.func,
  loaderStop: PT.func,
  modalOpen: PT.func,
};

export default compose(
  withRouter,
  withAuthLoader,
  withModal,
)(SetNewPasswordFormView);

