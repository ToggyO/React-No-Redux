import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { validateField } from '@components/Form/validations';
import { FormTemplateView } from '@components/Form/FormTemplate';
import { TextInput } from '@components/Form/TextInput';

const EnterNameFormView = () => {
  return (
    <FormTemplateView
      titleLarge="Welcome to Squad!"
      titleSmall="Thanks for signing up, please tell us your name."
    >
      <Formik
        initialValues={{ name: '' }}
        onSubmit={() => {}}
        render={({ errors, status, touched, isSubmitting, isValid, handleReset, ...props }) => (
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              component={TextInput}
              validate={validateField.name}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4"
            />
            <ErrorMessage name="name" component="div" className="formik-error error-label" />
            <button
              type="submit"
              disabled={!isValid}
              className="btn green rounded p-4 full_width login-page-button"
            >
              Next
            </button>
          </Form>
        )}
      />
    </FormTemplateView>
  );
};

export default EnterNameFormView;
