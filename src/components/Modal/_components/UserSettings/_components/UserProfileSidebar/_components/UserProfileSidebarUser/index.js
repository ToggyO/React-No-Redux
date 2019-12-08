import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { firstLetterToUpperCase } from '@utils/index';

export const UserProfileSidebarUserView = ({ setTab, currentTab }) => (
  <div className={`${s.container} pb-10`}>
    <div className={`${s.link_container} pl-10 flex flex-column`}>
      <button
        name="profile"
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Profile' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Profile
      </button>
      <button
        name="preferences"
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Preferences' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Preferences
      </button>
      <button
        name="notifications"
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Notifications' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Notifications
      </button>
    </div>
  </div>
);

UserProfileSidebarUserView.propTypes = {
  setTab: PT.func,
  currentTab: PT.string,
};
