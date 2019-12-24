import React from 'react';

import s from './style.module.sass';

export const SidebarTeamsProjectPlaceholder = () => (
  <div className={`${s.wrapper} relative pl-4 pr-4`}>
    <div className={`${s.container} flex align-items-center`}>
      <div className={`${s.logo} mr-4`} />
      <div className={`${s.tittle_container}`} />
    </div>
  </div>
);
