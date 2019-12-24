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
  iconName,
  style = {},
}) => (
  <div className={`${s.wrapper} ${addClassWrapper}`} style={style.wrapper}>
    <div className={`${s.preloader} ${addClassPreloader}`} style={style.preloader}>
      <Icon className={addClassImage} iconName={iconName} />
    </div>
    <div className={`${s.children} ${addClassChildren}`} style={style.children}>
      {children}
    </div>
  </div>
);

Preloader.propTypes = {
  addClassWrapper: PT.string,
  addClassPreloader: PT.string,
  addClassChildren: PT.string,
  addClassImage: PT.string,
  iconName: PT.string,
  children: PT.oneOfType([PT.element, PT.node, PT.func, PT.array]),
  style: PT.object,
};
