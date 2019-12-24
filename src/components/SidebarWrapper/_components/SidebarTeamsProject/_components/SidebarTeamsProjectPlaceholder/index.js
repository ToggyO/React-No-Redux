import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const SidebarTeamsProjectPlaceholder = ({ isSidebarOpened }) => (
  <div className={`${s.wrapper} ${isSidebarOpened ? s.h_79 : ''} relative pl-4 pr-4`}>
    <div
      className={`${s.container} flex ${
        isSidebarOpened ? 'justify-content-flex-start' : 'justify-content-center'
      }  align-items-center`}
    >
      <div className={`${s.logo} ${isSidebarOpened ? 'mr-4' : ''}`} />
      {isSidebarOpened && <div className={`${s.tittle_container}`} />}
    </div>
  </div>
);

SidebarTeamsProjectPlaceholder.propTypes = {
  isSidebarOpened: PT.bool,
};
