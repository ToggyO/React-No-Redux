import { Field, Form, Formik } from 'formik';

import React from 'react';

import key from '@assets/login_page/key.png';
import { PasswordInput } from '@components/Form/PasswordInput';


import mail from '@assets/login_page/email_icon.png';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';

const LoginPageViewForm = () => (
  <Formik
    // ref={formikRef}
    initialValues={{ email: '', password: '' }}
    onSubmit={() => {
    }}
    render={({ errors, touched, isValid }) => (
      <Form>
        <Field
          type="email"
          name="email"
          placeholder="name@company.com"
          imgBefore={mail}
          component={TextInput}
          validate={validateField.email}
          addClassWrapper="pt-4 pb-4"
          addClassInput="pt-4 pb-4"
        />
        {errors.email && touched.email &&
        <div className="formik-error error-label">{errors.email}</div>}
        <Field
          name="password"
          placeholder="Password..."
          imgBefore={key}
          component={PasswordInput}
          validate={validateField.password}
          addClassWrapper="pt-4 pb-4"
          addClassInput="pt-4 pb-4"
        />
        {errors.password && touched.password &&
        <div className="formik-error error-label">{errors.password}</div>}
        <button
          type="submit"
          disabled={!isValid}
          className="btn green rounded p-4 full_width login-page-button"
        >
          Sign in
        </button>
        <span
          style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or</span>
        <div style={{ width: 555, height: 52, background: 'gray', marginBottom: 16 }}/>
      </Form>
    )}
  />
);

export default LoginPageViewForm;
