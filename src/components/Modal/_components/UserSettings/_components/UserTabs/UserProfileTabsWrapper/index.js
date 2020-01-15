import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { ModalBorderColorBlock, ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';
import { USER_COMMON } from '@config/common';

export const UserProfileTabsWrapper = ({ children, currentTab, onClose }) => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.tittle_container} flex pb-7 relative`}>
      <ModalFontPrimaryColorBlock className={s.title}>{currentTab.prefix}</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={s.title}>&nbsp;/&nbsp;</ModalFontPrimaryColorBlock>
      <ModalFontPrimaryColorBlock className={`${s.tab} ${s.title}`}>
        {currentTab.tab === USER_COMMON.USER_SETTINGS_TABS.TEAMS ? currentTab.teamName : currentTab.tab}
      </ModalFontPrimaryColorBlock>
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
  currentTab: PT.object,
  onClose: PT.func,
};
