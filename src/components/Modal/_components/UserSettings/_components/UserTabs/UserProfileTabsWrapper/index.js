import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const UserProfileTabsWrapper = ({ children, currentTab, onClose }) => (
  <div className={s.container}>
    <div className={`${s.tittle_container} flex pb-7 relative`}>
      <h2 className={s.title}>
        {currentTab === 'Profile' || currentTab === 'Preferences' || currentTab === 'Notifications'
          ? 'User'
          : ''}
        {currentTab === 'Billing' || currentTab === 'Manage users' ? 'Company' : ''}
      </h2>
      <h2 className={s.title}>&nbsp;/&nbsp;</h2>
      <h2 className={`${s.tab} ${s.title}`}>{currentTab}</h2>
      <div className={`${s.close}`} onClick={onClose}>
        <button type="button" className="btn">
          <Icon iconName="close-modal" className="fill-primary" />
        </button>
      </div>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

UserProfileTabsWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func, PT.array]),
  currentTab: PT.string,
  onClose: PT.func,
};
