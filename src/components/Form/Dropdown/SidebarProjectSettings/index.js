import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import Dropdown from '@components/Form/Dropdown/Dropdown';
import { DropdownSettingsItem } from '@components/Form/Dropdown/SidebarProjectSettings/_components/DropdownSettingsItem';
import { Icon } from '@components/Icon';

export const SidebarProjectSettings = ({ children }) => {
  const getDropdownList = () => [
    <DropdownSettingsItem link="#" iconName="edit-project-settings" title="Edit project settings" />,
    <DropdownSettingsItem link="#" iconName="edit-project-statuses" title="Edit project statuses" />,
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
      outerListClassName={s.list}
      // innerListClassName="flex flex-wrap-wrap"
      elementClassName="full_width"
    >
      {children}
    </Dropdown>
  );
};

SidebarProjectSettings.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func]),
};
