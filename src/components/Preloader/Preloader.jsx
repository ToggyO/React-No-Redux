import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import preloader from '@assets/preloader.svg';

const Preloader = ({ addClassWrapper = '', addClassPreloader = '', addClassChildren = '', children }) => (
  <div className={`${s.wrapper} ${addClassWrapper}`}>
    <div className={`${s.preloader} ${addClassPreloader}`}>
      <img src={preloader} alt="preloader.svg" />
    </div>
    <div className={`${s.children} ${addClassChildren}`}>{children}</div>
  </div>
);

export default Preloader;

Preloader.propTypes = {
  addClassWrapper: PropTypes.string,
  addClassPreloader: PropTypes.string,
  addClassChildren: PropTypes.string,
  children: PropTypes.element,
};
