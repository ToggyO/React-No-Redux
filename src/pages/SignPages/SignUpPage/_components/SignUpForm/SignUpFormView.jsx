/* eslint-disable no-unused-vars */
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { FormTemplateView } from '@components/Form/FormTemplate';

const SignUpFormView = () => (
  <FormTemplateView
    titleLarge="Create your account"
    titleSmall="Sign up with your work email or your Google Account."
    link="Already have a Squad account? Log in here."
  >
    <Formik
      // initialValues={user /** { email, social } */}
      onSubmit={() => {}}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Field
            type="email"
            name="google_mail"
            placeholder="Continue with Google"
            imgbefore="../../assets/login_page/email_icon.png"
            component={TextInput}
            validate={validateField.email}
            inputstyle={{ paddingTop: 16, paddingBottom: 16 }}
          />
          <ErrorMessage name="google_mail" component="div" className="formik-error error-label" />
          <span style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or</span>
          <Field
            type="email"
            name="user_mail"
            placeholder="name@company.com"
            imgbefore="../../assets/login_page/email_icon.png"
            component={TextInput}
            validate={validateField.email}
            inputstyle={{ paddingTop: 16, paddingBottom: 16 }}
          />
          <ErrorMessage name="user_mail" component="div" className="formik-error error-label" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn green rounded p-4 full_width"
            style={{
              fontSize: 19,
              lineHeight: '23px',
              fontWeight: 500,
            }}
          >
            Continue with email
          </button>
        </Form>
      )}
    />
  </FormTemplateView>
);

export default SignUpFormView;
