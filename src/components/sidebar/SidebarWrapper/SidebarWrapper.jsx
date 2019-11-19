/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import s from './style.module.sass';
import { style as LinkButtonStyle } from './link_button_style';

import { Icon } from '@components/Icon';
import { LinkButton } from '@components/sidebar/LinkButton';

const buttons = [
  {
    link: '#',
    iconName: 'sidebar-inbox',
    title: 'Inbox',
  },
  {
    link: '#',
    iconName: 'sidebar-tasks',
    title: 'Tasks',
  },
  {
    link: '#',
    iconName: 'sidebar-settings',
    title: 'Settings',
  },
];


const SidebarWrapper = ({
  children,
}) => {
  const [ isOpen, toggleOpen ] = useState(true);

  return (
    <div className={`${s.wrapper} flex`}>
      <div className={`${s.sidebar} ${isOpen ? s.sidebar_shown : ''}`}>
        <div className={`${s.logo_container} flex justify-content-center align-items-center`}>
          <div className={`${s.logo} ${isOpen ? s.logo_large : s.logo_small}`}>
            <Icon iconName="squad-logo" className={s.image}/>
          </div>
          <button
            type="button"
            className={`${s.toggle_button}`}
            onClick={() => toggleOpen(!isOpen)}
          >
            <Icon iconName="arrow-right" className={!isOpen ? 'rotate-180' : ''}/>
          </button>
        </div>
        <div className={`${s.links} ${isOpen ? s.links_horizontal : s.links_vertical} flex justify-content-center align-items-center`}>
          <LinkButton
            info={buttons}
            style={LinkButtonStyle}
          />
        </div>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  )
};

export default SidebarWrapper;
