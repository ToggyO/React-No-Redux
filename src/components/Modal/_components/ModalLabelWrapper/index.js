import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as preloaderStyle } from './preloader_style';

import { Icon } from '@components/Icon';
import { Preloader } from '@components/Preloader';
import { ModalBaseColorBlock, ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';

export const ModalLabelWrapper = ({ children, label, onClose, modalLoading, style = {} }) => (
  <ModalBaseColorBlock className={s.wrapper} style={style.wrapper}>
    <Preloader
      iconName="preloader"
      style={preloaderStyle}
      addClassPreloader={modalLoading ? 'flex justify-content-center align-items-center' : 'display-none'}
      addClassChildren="flex justify-content-center align-items-center"
      colorScheme="default"
    />
    <div className={s.container} style={style.container}>
      <ModalFontColorBlock className={s.label} style={style.label}>
        {label}
      </ModalFontColorBlock>
      <div className={`${s.close}`} onClick={onClose}>
        <button type="button" className="btn fill-primary">
          <Icon iconName="close-modal" />
        </button>
      </div>
    </div>
    <div className={s.children}>{children}</div>
  </ModalBaseColorBlock>
);

ModalLabelWrapper.propTypes = {
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node), PT.element]),
  label: PT.string,
  onClose: PT.func,
  modalLoading: PT.bool,
  style: PT.object,
};
