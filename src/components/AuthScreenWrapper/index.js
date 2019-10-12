/* eslint-disable react/prop-types */
import React from 'react';

import style from './style.module.sass';

export const AuthScreenWrapper = ({ children }) => (
  <div className={`${style.login_page} flex`}>
    <div className={`${style.login_page__greet_screen} pt-14 pb-14`}>
      <div className={style.login_page__greet_screen_container}>
        <div className={`${style.login_page__logo} flex align-items-flex-end`}>
          <img src="../../assets/login_page/logo_squad.png" alt="logo.png" />
        </div>
        <div className={`${style.login_page__copyright} flex justify-content-center align-items-flex-end`}>
          <h4>© Squad Labs Inc.</h4>
        </div>
      </div>
    </div>
    <div className={`${style.login_page__form} flex justify-content-center align-items-center`}>
      {children}
    </div>
  </div>
);
