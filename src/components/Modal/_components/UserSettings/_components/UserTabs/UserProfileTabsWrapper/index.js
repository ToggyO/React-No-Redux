import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBorderColorBlock, ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';

export const UserProfileTabsWrapper = ({ children, currentTab, onClose }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.tittle_container} flex pb-7 relative`}>
      <ModalFontColorBlock className={s.title}>
        {currentTab === 'Profile' || currentTab === 'Preferences' || currentTab === 'Notifications'
          ? 'User'
          : ''}
        {currentTab === 'Billing' || currentTab === 'Manage users' ? 'Company' : ''}
      </ModalFontColorBlock>
      <ModalFontColorBlock className={s.title}>&nbsp;/&nbsp;</ModalFontColorBlock>
      <ModalFontColorBlock className={`${s.tab} ${s.title}`}>{currentTab}</ModalFontColorBlock>
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
