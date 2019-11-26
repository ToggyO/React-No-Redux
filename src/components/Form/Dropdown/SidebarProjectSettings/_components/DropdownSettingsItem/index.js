import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const DropdownSettingsItem = ({ link, iconName, iconClassName, title }) => (
  <Link to={link} className={s.container}>
    <div className={s.icon_container}>
      <Icon iconName={iconName} className={iconClassName} />
    </div>
    <div className={s.title_container}>
      <p className={s.title}>{title}</p>
    </div>
  </Link>
);

DropdownSettingsItem.propTypes = {
  link: PT.string,
  iconName: PT.string,
  iconClassName: PT.string,
  title: PT.string,
};
