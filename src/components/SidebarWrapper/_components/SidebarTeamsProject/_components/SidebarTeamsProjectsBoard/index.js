import React, { useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const SidebarTeamsProjectsBoard = ({
  boardName,
  addContainerClass = '',
  addCircleClass = '',
  addBoardClass = '',
  addBoardTitleClass = '',
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`${s.container} ${addContainerClass}`} onClick={() => setChecked(!checked)}>
      <div className={`${s.circle_container} ${addCircleClass}`}>
        <div className={`${s.circle} ${checked ? s.checked_circle : ''}`} />
      </div>
      <div className={`${s.board} ${addBoardClass}`}>
        <p className={`${addBoardTitleClass} ${checked ? s.checked_title : ''}`}>
          {boardName.replace(/(^\s*)|(\s*)$/g, '')}
        </p>
      </div>
    </div>
  );
};

SidebarTeamsProjectsBoard.propTypes = {
  boardName: PT.string,
  addContainerClass: PT.string,
  addCircleClass: PT.string,
  addBoardClass: PT.string,
  addBoardTitleClass: PT.string,
};
