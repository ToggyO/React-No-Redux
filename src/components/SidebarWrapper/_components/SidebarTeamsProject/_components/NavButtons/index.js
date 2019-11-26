import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const NavButtons = ({
  isOpen,
  showSettings,
  addContainerClass = '',
  addSettingsIconClass = '',
  addCreateButtonClass = '',
  settingsWrapper: SettingsWrapper,
}) => (
  <div
    className={`${s.container} ${
      isOpen ? s.shown : s.hidden
    } ${addContainerClass} flex justify-content-space-between align-items-center`}
  >
    <SettingsWrapper>
      <button
        type="button"
        className={`${s.headline_button} ${
          showSettings ? s.shown : s.hidden
        } ${addSettingsIconClass} flex justify-content-center align-items-center`}
      >
        <Icon iconName="settings_switch" className={s.settings_icon} />
      </button>
    </SettingsWrapper>
    <button type="button" className={`${s.headline_create} ${addCreateButtonClass}`}>
      <Icon iconName="add-plus" className={isOpen ? 'rotate-270' : 'rotate-270'} />
    </button>
  </div>
);

NavButtons.propTypes = {
  isOpen: PT.bool,
  showSettings: PT.bool,
  addContainerClass: PT.string,
  addSettingsIconClass: PT.string,
  addCreateButtonClass: PT.string,
  settingsWrapper: PT.oneOfType([PT.element, PT.node, PT.func]),
};
