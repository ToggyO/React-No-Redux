import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { firstLetterToUpperCase } from '@utils/index';

export const UserProfileSidebarCompanyView = ({ setTab, currentTab }) => (
  <div className={`${s.container} pb-10`}>
    <div className={`${s.link_container} pl-10 flex flex-column`}>
      <button
        name="billing"
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Billing' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Billing
      </button>
      <button
        name="manage users"
        type="button"
        className={`${s.link} btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Manage users' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
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
