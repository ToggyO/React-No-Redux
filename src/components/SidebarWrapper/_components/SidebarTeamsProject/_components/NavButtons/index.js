import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const NavButtons = ({ isOpen, showSettings }) => (
  <div
    className={`${s.container} ${
      isOpen ? s.shown : s.hidden
    } flex justify-content-space-between align-items-center`}
  >
    <button
      type="button"
      className={`${s.headline_button} ${
        showSettings ? s.shown : s.hidden
      } mr-3 btn flex justify-content-center align-items-center`}
    >
      <Icon iconName="settings_switch" className={s.settings_icon} />
    </button>
    <button type="button" className={`${s.headline_create} btn`}>
      <Icon iconName="add-plus" className={isOpen ? 'rotate-270' : 'rotate-270'} />
    </button>
  </div>
);

NavButtons.propTypes = {
  isOpen: PT.bool,
  showSettings: PT.bool,
};
