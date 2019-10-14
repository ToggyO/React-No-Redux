/* eslint-disable react/prop-types */
import React from 'react';

import style from './style.module.sass';

import logo from '@assets/login_page/logo_squad.png';

export const AuthScreenWrapper = ({ children }) => (
  <div className={`${style.login_page} flex`}>
    <div className={`${style.greet_screen} pt-14 pb-14`}>
      <div className={style.greet_screen_container}>
        <div className={`${style.logo} flex align-items-flex-end`}>
          <img src={logo} alt="Squad.io logo" />
        </div>
        <div className={`${style.copyright} flex justify-content-center align-items-flex-end`}>
          <h4>© Squad Labs Inc.</h4>
        </div>
      </div>
    </div>
    <div className={`${style.form} flex justify-content-center align-items-center`}>{children}</div>
  </div>
);