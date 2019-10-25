import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

const Preloader = ({
  addClassWrapper = '',
  addClassPreloader = '',
  addClassChildren = '',
  addClassImage = '',
  children,
}) => (
  <div className={`${s.wrapper} ${addClassWrapper}`}>
    <div className={`${s.preloader} ${addClassPreloader}`}>
      <Icon className={addClassImage} iconName="preloader" />
    </div>
    <div className={`${s.children} ${addClassChildren}`}>{children}</div>
  </div>
);

export default Preloader;

Preloader.propTypes = {
  addClassWrapper: PropTypes.string,
  addClassPreloader: PropTypes.string,
  addClassChildren: PropTypes.string,
  addClassImage: PropTypes.string,
  children: PropTypes.element,
};
