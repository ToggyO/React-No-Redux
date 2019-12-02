import React from 'react';

import s from './style.module.sass';

import { Icon } from '@components/Icon';


export const UserProfileSidebarLogoView = () => (
  <>
    <div className={s.icon_container}>
      <Icon iconName="logo_small" className={s.icon}/>
    </div>
    <div className={s.headline}>
      <h1>Settings</h1>
    </div>
  </>
);
