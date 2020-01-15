import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { ModalColorButton } from '@components/StyledComponents/ColorBlocks';
import { USER_COMMON } from '@config/common';

export const UserProfileSidebarCompanyView = ({ setTab, currentTab }) => (
  <div className={`${s.container} pb-10`}>
    <div className={`${s.link_container} flex flex-column`}>
      <ModalColorButton
        name="billing"
        type="button"
        className={`${s.link} pl-10 btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === USER_COMMON.USER_SETTINGS_TABS.BILLING ? 700 : 400 }}
        onClick={() =>
          setTab(prevTab => ({
            ...prevTab,
            prefix: USER_COMMON.USER_SETTINGS_TABS_PREFIX.COMPANY,
            tab: USER_COMMON.USER_SETTINGS_TABS.BILLING,
          }))
        }
      >
        Billing
      </ModalColorButton>
      <ModalColorButton
        name="manage users"
        type="button"
        className={`${s.link} pl-10 btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === USER_COMMON.USER_SETTINGS_TABS.MANAGE_USERS ? 700 : 400 }}
        onClick={() =>
          setTab(prevTab => ({
            ...prevTab,
            prefix: USER_COMMON.USER_SETTINGS_TABS_PREFIX.COMPANY,
            tab: USER_COMMON.USER_SETTINGS_TABS.MANAGE_USERS,
          }))
        }
      >
        Manage users
      </ModalColorButton>
    </div>
  </div>
);

UserProfileSidebarCompanyView.propTypes = {
  setTab: PT.func,
  currentTab: PT.string,
};
