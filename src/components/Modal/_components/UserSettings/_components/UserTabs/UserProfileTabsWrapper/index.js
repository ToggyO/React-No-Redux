import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const UserProfileTabsWrapper = ({ children, currentTab }) => (
  <div className={s.container}>
    <div className={`${s.tittle_container} flex pb-7`}>
      <h2 className={s.title}>
        {currentTab === 'Profile' || currentTab === 'Preferences' || currentTab === 'Notifications'
          ? 'User'
          : ''}
        {currentTab === 'Billing' || currentTab === 'Manage users' ? 'Company' : ''}
      </h2>
      <h2 className={s.title}>&nbsp;/&nbsp;</h2>
      <h2 className={`${s.tab} ${s.title}`}>{currentTab}</h2>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

UserProfileTabsWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func, PT.array]),
  currentTab: PT.string,
};
