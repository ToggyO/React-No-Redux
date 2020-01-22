import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBorderColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';

const UserProfileTabsWrapperView = ({ children, tabPrefix, currentTab, onClose }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.tittle_container} flex pb-7 relative`}>
      <ModalFontPrimaryColorBlock className={s.title}>{tabPrefix}</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={s.title}>&nbsp;/&nbsp;</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.tab} ${s.title}`}>{currentTab}</ModalFontPrimaryColorBlock>
      <div className={`${s.close}`} onClick={onClose}>
        <button type="button" className="btn">
          <Icon iconName="close-modal" />
        </button>
      </div>
    </ModalBorderColorBlock>
    <div className={s.children}>{children}</div>
  </div>
);

UserProfileTabsWrapperView.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func, PT.array]),
  tabPrefix: PT.string,
  currentTab: PT.string,
  onClose: PT.func,
};

export default UserProfileTabsWrapperView;