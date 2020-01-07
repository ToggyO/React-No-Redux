import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { firstLetterToUpperCase } from '@utils/index';
import { ModalColorButton } from '@components/StyledComponents/ColorBlocks';

export const UserProfileSidebarUserView = ({ setTab, currentTab }) => (
  <div className={`${s.container} pb-10`}>
    <div className={`${s.link_container} flex flex-column`}>
      <ModalColorButton
        name="profile"
        type="button"
        className={`${s.link} pl-10 btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Profile' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Profile
      </ModalColorButton>
      <ModalColorButton
        name="preferences"
        type="button"
        className={`${s.link} pl-10 btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Preferences' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Preferences
      </ModalColorButton>
      <ModalColorButton
        name="notifications"
        type="button"
        className={`${s.link} pl-10 btn mt-0 mb-0 text-align-left`}
        style={{ fontWeight: currentTab === 'Notifications' ? 500 : 400 }}
        onClick={e => setTab(firstLetterToUpperCase(e.target.name))}
      >
        Notifications
      </ModalColorButton>
    </div>
  </div>
);

UserProfileSidebarUserView.propTypes = {
  setTab: PT.func,
  currentTab: PT.string,
};
