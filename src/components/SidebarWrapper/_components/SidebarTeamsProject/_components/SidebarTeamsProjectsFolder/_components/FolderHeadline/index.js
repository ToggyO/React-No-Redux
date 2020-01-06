import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { SecondaryColorHeadlineFlagged } from '@components/StyledComponents/ColorBlocks';

export const FolderHeadline = ({ isOpen, folderName, addContainerClass = '' }) => (
  <div className={`${s.container} ${addContainerClass}`}>
    <div className={`${s.icon_container} relative`}>
      <Icon iconName="folder-empty" className={`${s.folder_empty}`} />
      <Icon iconName="folder" className={`${s.folder} ${isOpen ? s.folder_closed : ''}`} />
    </div>
    <SecondaryColorHeadlineFlagged className={`${s.headline_text}`} flag={isOpen}>
      {folderName.replace(/(^\s*)|(\s*)$/g, '')}
    </SecondaryColorHeadlineFlagged>
  </div>
);

FolderHeadline.propTypes = {
  isOpen: PT.bool,
  folderName: PT.string,
  addContainerClass: PT.string,
};
