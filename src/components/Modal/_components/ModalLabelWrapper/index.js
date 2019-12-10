import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { Preloader } from '@components/Preloader';
import { style as preloaderStyle } from '@components/Modal/_components/UserSettings/preloader_style';

export const ModalLabelWrapper = ({ children, label, onClose, modalLoading }) => (
  <div className={s.wrapper}>
    <Preloader
      style={preloaderStyle}
      addClassPreloader={modalLoading ? 'flex justify-content-center align-items-center' : 'display-none'}
      addClassChildren="flex justify-content-center align-items-center"
    />
    <div className={s.container}>
      <h3 className={s.label}>{label}</h3>
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
};
