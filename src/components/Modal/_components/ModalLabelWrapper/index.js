import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as preloaderStyle } from './preloader_style';

import { Icon } from '@components/Icon';
import { Preloader } from '@components/Preloader';

export const ModalLabelWrapper = ({ children, label, onClose, modalLoading, style = {} }) => (
  <div className={s.wrapper} style={style.wrapper}>
    <Preloader
      style={preloaderStyle}
      addClassPreloader={modalLoading ? 'flex justify-content-center align-items-center' : 'display-none'}
      addClassChildren="flex justify-content-center align-items-center"
    />
    <div className={s.container} style={style.container}>
      <h3 className={s.label} style={style.label}>
        {label}
      </h3>
      <div className={`${s.close}`} onClick={onClose}>
        <button type="button" className="btn fill-primary">
          <Icon iconName="close-modal" />
        </button>
      </div>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

ModalLabelWrapper.propTypes = {
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node), PT.element]),
  label: PT.string,
  onClose: PT.func,
  modalLoading: PT.bool,
  style: PT.object,
};
