import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { PrimaryColorFilledButton } from '@components/StyledComponents/Buttons';
import { MODAL_KEYS, USER_COMMON } from '@config/common';

export const TeamsButtons = ({ isOpen, modalOpen }) => (
  <div className={`${s.container} ${isOpen ? s.container_shown : s.container_hidden} flex flex-wrap-wrap`}>
    <PrimaryColorFilledButton
      type="button"
      className={`${s.choose_team} ${
        isOpen ? s.shown : s.hidden
      } btn flex justify-content-center align-items-center pt-3 pb-3`}
      onClick={() =>
        modalOpen(MODAL_KEYS.USER_SETTINGS, { userProfileTab: USER_COMMON.USER_SETTINGS_TABS.PROFILE })
      }
    >
      <Icon
        iconName="settings_switch_secondary"
        className={`${s.choose_team__icon} ${isOpen ? 'mr-2' : ''}`}
      />
      <p>Settings</p>
    </PrimaryColorFilledButton>
    <PrimaryColorFilledButton
      type="button"
      className={`${s.add_projects} ${isOpen ? s.shown : s.hidden} ${
        isOpen ? '' : s.border_top
      } btn flex justify-content-center align-items-center pt-3 pb-3`}
    >
      <Icon iconName="add-circle-plus" className={`fill-secondary ${isOpen ? 'mr-2' : ''}`} />
      <p>Add project</p>
    </PrimaryColorFilledButton>
  </div>
);

TeamsButtons.propTypes = {
  isOpen: PT.bool,
  modalOpen: PT.func,
};
