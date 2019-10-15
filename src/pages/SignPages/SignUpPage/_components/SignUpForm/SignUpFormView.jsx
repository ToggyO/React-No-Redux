/* eslint-disable no-unused-vars */
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { FormTemplateView } from '@components/Form/FormTemplate';

import mail from '@assets/login_page/email_icon.png';

const SignUpFormView = () => (
  <FormTemplateView
    titleLarge="Create your account"
    titleSmall="Sign up with your work email or your Google Account."
    link="Already have a Squad account? Log in here."
  >
    <Formik
      initialValues={{ google_mail: '', user_mail: '' }}
      onSubmit={() => {}}
      render={({ errors, status, touched, isSubmitting, isValid }) => (
        <Form>
          <Field
            type="email"
            name="google_mail"
            placeholder="Continue with Google"
            imgBefore={mail}
            component={TextInput}
            // validate={validateField.email}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4"
          />
          <ErrorMessage name="google_mail" component="div" className="formik-error error-label" />
          <span style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or</span>
          <Field
            type="email"
            name="user_mail"
            placeholder="name@company.com"
            imgBefore={mail}
            component={TextInput}
            validate={validateField.email}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4"
          />
          <ErrorMessage name="user_mail" component="div" className="formik-error error-label" />
          <button
            type="submit"
            disabled={!isValid}
            className="btn green rounded p-4 full_width login-page-button"
          >
            Continue with email
          </button>
        </Form>
      )}
    />
  </FormTemplateView>
);

export default SignUpFormView;
