import React from 'react';
import PT from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import { Tooltip } from '@components/ReactTooltip/bin';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const NavButtons = ({
  isOpen,
  showSettings,
  addContainerClass = '',
  addSettingsIconClass = '',
  addCreateButtonClass = '',
  settingsTooltip: { placement, tooltip, trigger, innerRef, containerClass = '', arrowClass = '' },
}) => (
  <div
    className={`${s.container} ${
      isOpen ? s.shown : s.hidden
    } ${addContainerClass} flex justify-content-space-between align-items-center`}
  >
    <Tooltip
      placement={placement}
      tooltip={tooltip}
      trigger={trigger}
      innerRef={innerRef}
      containerClass={containerClass}
      arrowClass={arrowClass}
    >
      <button
        type="button"
        className={`${s.headline_button} ${
          showSettings ? s.shown : s.hidden
        } ${addSettingsIconClass} flex justify-content-center align-items-center`}
      >
        <Icon iconName="settings_switch_secondary" className={s.settings_icon} />
      </button>
    </Tooltip>
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
  settingsTooltip: PT.object,
};
