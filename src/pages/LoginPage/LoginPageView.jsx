import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { FormTemplateView } from '../components/form/FormTemplate';
import { TextInput } from '../components/form/TextInput';
import { validateField } from '../components/form/validation';

import style from './style.module.sass';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <div className={`${style.login_page} flex`}>
      <div className={`${style.greet_screen} pt-14 pb-14`}>
        <div className={style.greet_screen_container}>
          <div className={`${style.logo} flex align-items-flex-end`}>
            <img src="../../assets/login_page/logo_squad.png" alt="logo.png"/>
          </div>
          <div className={`${style.copyright} flex justify-content-center align-items-flex-end`}>
            <h4>© Squad Labs Inc.</h4>
          </div>
        </div>
      </div>
      <div className={`${style.form} flex justify-content-center align-items-center`}>

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
                />
                <ErrorMessage name="google_mail" component="div" className="formik-error error-label"/>
                <span style={{ color: '#9398A2', fontSize: 15, lineHeight: '21px', fontWeight: 400 }}>Or</span>
                <Field
                  type="email"
                  name="user_mail"
                  placeholder="name@company.com"
                  imgbefore="../../assets/login_page/email_icon.png"
                  component={TextInput}
                  validate={validateField.email}
                />
                <ErrorMessage name="user_mail" component="div" className="formik-error error-label"/>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn green rounded p-4 full_width"
                >
                  Next
                </button>
              </Form>
            )}
          />
        </FormTemplateView>

      </div>
    </div>
  </div>
);

export default LoginPageView;
