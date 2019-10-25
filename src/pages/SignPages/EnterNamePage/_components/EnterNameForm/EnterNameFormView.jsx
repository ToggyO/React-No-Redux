import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { style } from './checkbox_style';

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import { validateField } from '@components/Form/validations';
import { TextInput } from '@components/Form/TextInput';
import { Checkbox } from '@components/Form/Checkbox';

const EnterNameFormView = ({ errorsFromBackend, setUserName }) => {
  const [state, setState] = useState(false);
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ name: '' }}
      onSubmit={setUserName}
      render={({ isValid, errors }) => (
        <Form>
          {errors.global &&
          <div className="formik-error error-label">{errors.global}</div>}
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            component={TextInput}
            validate={validateField.name}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4 pl-5"
          />
          <ErrorMessage name="name" component="div" className="formik-error error-label" />
          <Checkbox
            addClassTitleWrapper="flex pt-2 pb-6 pl-1 pr-1"
            addClassCheckbox={`checkbox ${state ? 'checkmark_checked' : ''}`}
            title="I agree with Squad’s terms and privacy policy"
            style={style}
            onClick={() => setState(!state)}
          />
          <button
            type="submit"
            disabled={!isValid || !state}
            className="btn green-filled rounded p-4 full_width login-page-button"
          >
            Next
          </button>
        </Form>
      )}
    />
  );
};

EnterNameFormView.propTypes = {
  errorsFromBackend: PropTypes.array,
  setUserName: PropTypes.func,
};

export default EnterNameFormView;
