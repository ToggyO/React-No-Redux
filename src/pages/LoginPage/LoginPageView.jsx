import React from 'react';
import { Helmet } from 'react-helmet';

import { SignUpStepOne } from '../components/form/SignUpForms/SignUpStepOne';

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

        <SignUpStepOne />

      </div>
    </div>
  </div>
);

export default LoginPageView;
