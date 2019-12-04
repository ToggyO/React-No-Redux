import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const TeamsButtons = ({ isOpen, modalOpen }) => (
  <div className={`${s.container} ${isOpen ? s.container_shown : s.container_hidden} flex flex-wrap-wrap`}>
    <button
      type="button"
      className={`${s.choose_team} ${
        isOpen ? s.shown : s.hidden
      } btn flex justify-content-center align-items-center pt-3 pb-3`}
      onClick={() => modalOpen('UserSettings')}
    >
      <Icon iconName="settings_switch" className={`${s.choose_team__icon} mr-2`} />
      <p>Settings</p>
    </button>
    <button
      type="button"
      className={`${s.add_projects} ${isOpen ? s.shown : s.hidden} ${
        isOpen ? '' : s.border_top
      } btn flex justify-content-center align-items-center pt-3 pb-3`}
    >
      <Icon iconName="add-circle-plus" className={`${s.choose_team__icon} fill-secondary mr-2`} />
      <p>Add project</p>
    </button>
  </div>
);

TeamsButtons.propTypes = {
  isOpen: PT.bool,
  modalOpen: PT.func,
};
