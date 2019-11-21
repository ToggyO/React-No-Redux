import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
// import { NavButtons } from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/NavButtons';
import { setHeightProperty } from '@utils/index';

export const SidebarTeamsProjectsFolder = ({ folderName = '   Folder' }) => {
  const [isOpen, toggleOpen] = useState(false);
  // const [showSettings, toggleShowSettings] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <div
      className={`${s.container} relative`}
      onClick={() => {
        toggleOpen(!isOpen);
        setHeightProperty(isOpen, containerRef, contentRef);
      }}
    >
      <div className={`${s.headline} flex`}>
        <div className={`${s.icon_container} relative`}>
          <Icon iconName="folder-empty" className={s.folder_empty} />
          <Icon iconName="folder" className={s.folder} />
        </div>
        <div className={s.headline_text}>
          <p>{folderName}</p>
          {/* <NavButtons isOpen={isOpen} showSettings={showSettings} /> */}
        </div>
      </div>
      <div ref={containerRef} className={`${s.boards_container}`}>
        <div ref={contentRef}>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
        </div>
      </div>
    </div>
  );
};

SidebarTeamsProjectsFolder.propTypes = {
  folderName: PT.string,
};
