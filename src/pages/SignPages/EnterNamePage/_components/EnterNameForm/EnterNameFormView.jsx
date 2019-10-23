import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { style } from './checkbox_style';

import { validateField } from '@components/Form/validations';
import { TextInput } from '@components/Form/TextInput';
import { Checkbox } from '@components/Form/Checkbox';

const EnterNameFormView = () => {
  const [state, setState] = useState(false);

  return (
    <Formik
      initialValues={{ name: '', privacy: state }}
      onSubmit={(values) => console.log(values, state)}
      render={({ isValid, values }) => (
        <Form>
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
            onClick={() => {setState(!state); values.privacy = !state}}
          />
          <button
            type="submit"
            disabled={!isValid || !values.privacy}
            className="btn green rounded p-4 full_width login-page-button"
          >
            Next
          </button>
        </Form>
      )}
    />
  );
};

export default EnterNameFormView;
