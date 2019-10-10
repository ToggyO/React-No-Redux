import React from 'react';
import { Helmet } from 'react-helmet';

import style from './style.module.sass';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <div className={style.login_page}>
      <div className={style.login_page__logo}>
        img
      </div>
    </div>
  </div>
);

export default LoginPageView;
