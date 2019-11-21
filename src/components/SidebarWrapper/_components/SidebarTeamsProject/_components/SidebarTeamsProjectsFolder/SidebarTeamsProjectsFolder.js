import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const SidebarTeamsProjectsFolder = ({ folderName = '   Folder' }) => (
  <div className={s.container}>
    <div className={s.headline}>
      <div className={s.icon_container}>
        <Icon />
      </div>
      <div className={s.headline_text}>
        <p>{folderName}</p>
      </div>
    </div>
    <div className={s.boards_container}>
      <div>
        <div>Board</div>
      </div>
    </div>
  </div>
);

SidebarTeamsProjectsFolder.propTypes = {
  folderName: PT.string,
};
