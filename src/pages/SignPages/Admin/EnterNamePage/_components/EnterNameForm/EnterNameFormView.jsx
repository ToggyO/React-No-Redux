import React, { useEffect, useRef, useState } from 'react';
import PT from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { style } from './checkbox_style';

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import { validateField } from '@components/Form/validations';
import { TextInput } from '@components/Form/TextInput';
import { Checkbox } from '@components/Form/Checkbox';

const EnterNameFormView = ({
  errorsFromBackend = [],
  setUserName,
  clearStoreErrors,
}) => {
  const [state, setState] = useState(false);
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  useEffect(() => () => clearStoreErrors(), []);

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
            addClassInput="default_input pt-4 pb-4 pl-5"
            addClassInputContainer="form_background"
            addClassFocusedInput="form_border_focus"
            addClassBlurredInput="form_border"
            maxLength={60}
          />
          <ErrorMessage name="name" component="div" className="formik-error error-label" />
          <Checkbox
            addClassTitleWrapper="flex pt-2 pb-6 pl-1 pr-1"
            addClassCheckbox={`checkbox ${state ? 'checkmark_checked' : ''}`}
            title={<p>I agree with Squad’s&nbsp;
              <a className="form_link" href="#">terms</a>
              &nbsp;and&nbsp;
              <a className="form_link" href="#">privacy policy</a>
            </p>}
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
  errorsFromBackend: PT.array,
  setUserName: PT.func,
  clearStoreErrors: PT.func,
};

export default EnterNameFormView;
