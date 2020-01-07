import React from 'react';
import PT from 'prop-types';

import styles from './style.module.sass';

import s from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsHeadline/style.module.sass';
import {
  ModalBorderColorBlock,
  ModalFontColorBlock,
  ModalSecondaryColorBlockHover,
} from '@components/StyledComponents/ColorBlocks';

export const UserProfileSidebarTeamsView = ({
  color = 'grey',
  teamName = 'Team Name',
  addClassContainer,
  addClassCircle,
  addClassHeadline,
  onClick,
  style = {},
}) => (
  <ModalBorderColorBlock style={style.wrapper}>
    <ModalSecondaryColorBlockHover
      className={`${styles.container} ${addClassContainer}`}
      style={style.container}
      onClick={onClick}
    >
      <div
        className={`${styles.square} ${addClassCircle}`}
        style={{ ...style.square, backgroundColor: color }}
      >
        <span className={`${styles.team_name}`} style={style.teamName}>
          {teamName
            .replace(/ /g, '')
            .slice(0, 1)
            .toUpperCase()}
        </span>
      </div>
      <div className={`${s.headline} ${addClassHeadline}`} style={style.headline}>
        <ModalFontColorBlock className={styles.headline_text} style={style.headlineText}>
          {teamName.replace(/(^\s*)|(\s*)$/g, '')}
        </ModalFontColorBlock>
      </div>
    </ModalSecondaryColorBlockHover>
  </ModalBorderColorBlock>
);

UserProfileSidebarTeamsView.propTypes = {
  color: PT.string,
  teamName: PT.string,
  addClassContainer: PT.string,
  addClassCircle: PT.string,
  addClassHeadline: PT.string,
  onClick: PT.func,
  style: PT.object,
};
