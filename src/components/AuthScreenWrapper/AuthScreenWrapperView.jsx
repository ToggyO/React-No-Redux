/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import style from './style.module.sass';

import { Preloader } from '@components/Preloader';
import { getWindowDimensions } from '@utils/index';

import logo from '@assets/login_page/logo_squad.png';

const AuthScreenWrapperView = ({ children, loading }) => {
  useEffect(() => {
    document.getElementById('test').style.minHeight = `${getWindowDimensions().height - 80}px`;
  }, []);

  return (
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
      <div className={`${style.form} ${style.children}`} id="test">
        <Preloader
          iconName="preloader-dark"
          addClassPreloader={loading ? 'flex justify-content-center align-items-center preloaderOverlay-light' : 'display-none'}
          addClassChildren="flex justify-content-center align-items-center"
        >
          {children}
        </Preloader>
      </div>
    </div>
  );
};

export default AuthScreenWrapperView;
