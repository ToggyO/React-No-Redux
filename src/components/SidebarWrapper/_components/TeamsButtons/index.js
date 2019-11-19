import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const TeamsButtons = ({ isOpen }) => (
  <div className={`${s.container} ${isOpen ? s.container_shown : s.container_hidden} flex`}>
    <button
      type="button"
      className={`${s.choose_team} ${
        isOpen ? s.shown : s.hidden
      } btn full_width flex justify-content-center align-items-center pt-3 pb-3`}
    >
      <Icon
        iconName="people"
        className={`${s.choose_team__icon} ${isOpen ? s.shown : s.hidden} fill-secondary mr-2`}
      />
      <p>Teams</p>
    </button>
    <button
      type="button"
      className={`${s.add_projects} ${isOpen ? s.shown : s.hidden} ${
        isOpen ? '' : s.border_top
      } btn full_width flex justify-content-center align-items-center pt-3 pb-3`}
    >
      <Icon
        iconName="add-circle-plus"
        className={`${s.choose_team__icon} ${isOpen ? s.shown : s.hidden} fill-secondary mr-2`}
      />
      <p>Add project</p>
    </button>
  </div>
);

TeamsButtons.propTypes = {
  isOpen: PT.bool,
};
