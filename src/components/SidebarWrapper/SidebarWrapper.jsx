/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import s from './style.module.sass';

import { Icon } from '@components/Icon';


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
      </div>
      <div className={s.children}>{children}</div>
    </div>
  )
};

export default SidebarWrapper;
