import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const DropdownSettingsButton = ({ iconName, iconClassName, title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${s.delete_button} btn mt-0 mb-0 flex align-items-center`}
  >
    <div className={s.icon_container}>
      <Icon iconName={iconName} className={iconClassName} />
    </div>
    <div className={s.delete_title}>
      <p>{title}</p>
    </div>
  </button>
);

DropdownSettingsButton.propTypes = {
  iconName: PT.string,
  iconClassName: PT.string,
  title: PT.string,
  onClick: PT.func,
};
