import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const UserProfileSidebarCompanyView = ({ setTab, currentTab }) => (
  <div className={`${s.container} pb-10`}>
    <div className={`${s.link_container} pl-10 flex flex-column`}>
      <button
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'billing' ? 500 : 400 }}
        onClick={() => setTab('billing')}
      >
        Billing
      </button>
      <button
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'manage' ? 500 : 400 }}
        onClick={() => setTab('manage')}
      >
        Manage users
      </button>
    </div>
  </div>
);

UserProfileSidebarCompanyView.propTypes = {
  setTab: PT.func,
  currentTab: PT.string,
};
