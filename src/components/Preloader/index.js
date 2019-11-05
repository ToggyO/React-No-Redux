import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const Preloader = ({
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

Preloader.propTypes = {
  addClassWrapper: PT.string,
  addClassPreloader: PT.string,
  addClassChildren: PT.string,
  addClassImage: PT.string,
  children: PT.element,
};
