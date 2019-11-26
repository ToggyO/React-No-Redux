import React from 'react';
import PT from 'prop-types';

import s from '../SidebarProjectSettings/style.module.sass';

import style from './style.module.sass';

import Dropdown from '@components/Form/Dropdown/Dropdown';
import { DropdownSettingsItem } from '@components/Form/Dropdown/SidebarProjectSettings/_components/DropdownSettingsItem';
import { Icon } from '@components/Icon';

export const SidebarFolderSettings = ({ children }) => {
  const getDropdownList = () => [
    <DropdownSettingsItem link="#" iconName="edit-project-settings" title="Edit project settings" />,
    <DropdownSettingsItem link="#" iconName="edit-project-statuses" title="Edit project statuses" />,
    <DropdownSettingsItem link="#" iconName="edit-project-statuses" title="Edit folder sharing" />,
    <button
      type="button"
      onClick={() => console.log('clicked')}
      className={`${s.delete_button} btn full_width mt-0 mb-0 flex align-items-center`}
    >
      <div className={s.icon_container}>
        <Icon iconName="delete-project" />
      </div>
      <div className={s.delete_title}>
        <p>Delete projects</p>
      </div>
    </button>,
  ];

  return (
    <Dropdown
      list={getDropdownList()}
      // menuClassName={s.menu}
      outerListClassName={`${s.list} ${style.list}`}
      // innerListClassName="flex flex-wrap-wrap"
      elementClassName="full_width"
    >
      {children}
    </Dropdown>
  );
};

SidebarFolderSettings.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func]),
};
