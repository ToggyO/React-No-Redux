import React, { useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import {
  SecondaryColorBlockFlagged,
  SecondaryColorHeadlineFlagged,
} from '@components/StyledComponents/ColorBlocks';

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
        <SecondaryColorBlockFlagged className={`${s.circle}`} flag={checked} />
      </div>
      <div className={`${s.board} ${addBoardClass}`}>
        <SecondaryColorHeadlineFlagged className={`${addBoardTitleClass} ${s.text}`} flag={checked}>
          {boardName.replace(/(^\s*)|(\s*)$/g, '')}
        </SecondaryColorHeadlineFlagged>
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
