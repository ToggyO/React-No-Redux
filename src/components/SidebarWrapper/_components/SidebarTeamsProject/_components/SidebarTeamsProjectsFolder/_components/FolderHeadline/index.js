import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const FolderHeadline = ({ isOpen, folderName, addContainerClass = '' }) => (
  <div className={`${s.container} ${addContainerClass}`}>
    <div className={`${s.icon_container} relative`}>
      <Icon iconName="folder-empty" className={`${s.folder_empty}`} />
      <Icon iconName="folder" className={`${s.folder} ${isOpen ? s.folder_closed : ''}`} />
    </div>
    <div className={`${s.headline_text} ${isOpen ? s.color_white : ''}`}>
      <p>{folderName.replace(/(^\s*)|(\s*)$/g, '')}</p>
    </div>
  </div>
);

FolderHeadline.propTypes = {
  isOpen: PT.bool,
  folderName: PT.string,
  addContainerClass: PT.string,
};
