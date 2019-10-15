import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { validateForm } from '@components/Form/validations';
import { FormTemplateView } from '@components/Form/FormTemplate';
import { PasswordInput } from '@components/Form/PasswordInput';

import key from '@assets/login_page/key.png';

const PasswordEnterFormView = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <FormTemplateView
      titleLarge="Choose your password"
      titleSmall="You’ll use this to log into your Squad account."
    >
      <Formik
        initialValues={{ password: '', passwordConfirm: '' }}
        validate={validateForm.confirmPassword}
        onSubmit={values => {
          setFormValues(values);
          console.log(formValues);
        }}
        render={({ errors, status, touched, isSubmitting, isValid, handleReset, ...props }) => (
          <Form>
            <Field
              name="password"
              placeholder="Password..."
              imgBefore={key}
              component={PasswordInput}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4"
            />
            <ErrorMessage name="password" component="div" className="formik-error error-label" />
            <Field
              name="passwordConfirm"
              placeholder="Confirm password..."
              imgBefore={key}
              component={PasswordInput}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4"
            />
            <ErrorMessage name="passwordConfirm" component="div" className="formik-error error-label" />
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

export default PasswordEnterFormView;
