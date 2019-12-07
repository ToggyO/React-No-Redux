import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { ERROR_CODES } from '@config/errorCodes';
import { responseFormikError } from '@utils/index';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';


const SetCompanyNameForm = ({ errorsFromBackend, setCompanyName, clearStoreErrors }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearStoreErrors(), []);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ name: '' }}
      onSubmit={setCompanyName}
      render={props => (
        <>
          {props.errors.global &&
          <div className="formik-error error-label">{props.errors.global}</div>}
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Enter a name"
              component={TextInput}
              validate={validateField.name}
              addClassWrapper="pt-4 pb-4"
              addClassInput="default_input pt-4 pb-4 pl-5 pr-5"
              maxLength={60}
            />
            <ErrorMessage name="name" component="div" className="formik-error error-label"/>
            <button
              type="submit"
              disabled={!props.isValid}
              className="btn green-filled rounded p-4 full_width login-page-button"
            >
              Next
            </button>
          </Form>
        </>
      )}
    />
  )
};

SetCompanyNameForm.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
  setCompanyName: PT.func,
  clearStoreErrors: PT.func,
  errors: PT.object,
  isValid: PT.bool,
};

export default SetCompanyNameForm;
