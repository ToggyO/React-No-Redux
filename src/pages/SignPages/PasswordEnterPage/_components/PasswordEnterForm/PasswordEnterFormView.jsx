import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { validateForm } from '@components/Form/validations';
import { PasswordInput } from '@components/Form/PasswordInput';
import key from '@assets/login_page/key.png';

const PasswordEnterFormView = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <Formik
      initialValues={{ password: undefined, passwordConfirm: undefined }}
      validate={validateForm.confirmPassword}
      onSubmit={values => {
        setFormValues(values);
        console.log(formValues);
      }}
      render={({ errors, touched, isValid }) => (
        <Form>
          <Field
            name="password"
            placeholder="Password..."
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4"
          />
          {errors.password && touched.password && <div className="formik-error error-label">{errors.password}</div>}
          <Field
            name="passwordConfirm"
            placeholder="Confirm password..."
            imgBefore={key}
            component={PasswordInput}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4"
          />
          {errors.passwordConfirm && touched.passwordConfirm && <div className="formik-error error-label">{errors.passwordConfirm}</div>}
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
  );
};

export default PasswordEnterFormView;
