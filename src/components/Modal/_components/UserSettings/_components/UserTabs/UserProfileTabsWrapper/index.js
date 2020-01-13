import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBorderColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';
import { USER_COMMON } from '@config/common';

export const UserProfileTabsWrapper = ({ children, currentTab, onClose }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.tittle_container} flex pb-7 relative`}>
      <ModalFontPrimaryColorBlock className={s.title}>
        {currentTab === USER_COMMON.USER_SETTINGS_TABS.PROFILE ||
        currentTab === USER_COMMON.USER_SETTINGS_TABS.PREFERENCES ||
        currentTab === USER_COMMON.USER_SETTINGS_TABS.NOTIFICATIONS
          ? 'User'
          : ''}
        {currentTab === USER_COMMON.USER_SETTINGS_TABS.BILLING ||
        currentTab === USER_COMMON.USER_SETTINGS_TABS.MANAGE_USERS
          ? 'Company'
          : ''}
      </ModalFontPrimaryColorBlock>
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

UserProfileTabsWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func, PT.array]),
  currentTab: PT.string,
  onClose: PT.func,
};
