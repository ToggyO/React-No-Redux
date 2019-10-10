import React from 'react';
import { Helmet } from 'react-helmet';

import style from './style.module.sass';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <div className={`${style.login_page} flex`}>
      <div className={style.login_page__greetScreen}>
        <div className={style.login_page__logo}>
          <img src="" alt=""/>
        </div>
        <div>
          <h1>© Squad Labs Inc.</h1>
        </div>
      </div>
      <div className={style.login_page__form}>
        form
      </div>
    </div>
  </div>
);

export default LoginPageView;
