import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './login.module.scss';

const LoginPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - Login">
      <meta name="description" content="Login page" />
    </Helmet>
    <h1 className={styles.login}>Unprotected Login page</h1>
  </div>
);

export default LoginPageView;
