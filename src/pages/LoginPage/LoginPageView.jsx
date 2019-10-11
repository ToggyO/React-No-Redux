import React from 'react';
import { Helmet } from 'react-helmet';

import style from './style.module.sass';
import { FormTemplateView } from '../components/form/FormTemplate';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <div className={`${style.login_page} flex`}>
      <div className={`${style.login_page__greet_screen} pt-14 pb-14`}>
        <div className={style.login_page__greet_screen_container}>
          <div className={`${style.login_page__logo} flex align-items-flex-end`}>
            <img src="../../assets/login_page/logo_squad.png" alt="logo.png"/>
          </div>
          <div className={`${style.login_page__copyright} flex justify-content-center align-items-flex-end`}>
            <h4>© Squad Labs Inc.</h4>
          </div>
        </div>
      </div>
      <div className={`${style.login_page__form} flex justify-content-center align-items-center`}>

        <FormTemplateView
          titleLarge="Create your account"
          titleSmall="Sign up with your work email or your Google Account."
          link="Already have a Squad account? Log in here."
        >
          <button type="button" className="btn green rounded p-4">Next</button>
        </FormTemplateView>


      </div>
    </div>
  </div>
);

export default LoginPageView;
