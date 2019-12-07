import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const UserProfileSidebarUserView = ({ setTab, currentTab }) => (
  <div className={`${s.container} pb-10`}>
    <div className={`${s.link_container} pl-10 flex flex-column`}>
      <button
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'profile' ? 500 : 400 }}
        onClick={() => setTab('profile')}
      >
        Profile
      </button>
      <button
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'preferences' ? 500 : 400 }}
        onClick={() => setTab('preferences')}
      >
        Preferences
      </button>
      <button
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'notifications' ? 500 : 400 }}
        onClick={() => setTab('notifications')}
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
