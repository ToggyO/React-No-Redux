import React from 'react';
import PT from 'prop-types';

import styles from './style.module.sass';

import s from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsHeadline/style.module.sass';
import {
  ModalBorderColorBlock,
  ModalFontPrimaryColorBlock,
  ModalSecondaryColorBlockHover,
} from '@components/StyledComponents/ColorBlocks';

export const UserProfileSidebarTeamsView = ({
  color = 'grey',
  teamName = 'Team Name',
  addClassContainer,
  addClassCircle,
  addClassHeadline,
  currentTab,
  onClick,
  style = {},
}) => (
  <ModalBorderColorBlock style={style.wrapper} onClick={onClick}>
    <ModalSecondaryColorBlockHover
      className={`${styles.container} ${addClassContainer}`}
      style={style.container}
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
        <ModalFontPrimaryColorBlock
          className={styles.headline_text}
          style={{
            ...style.headlineText,
            fontWeight: currentTab === teamName.replace(/(^\s*)|(\s*)$/g, '') ? 500 : 400,
          }}
        >
          {teamName.replace(/(^\s*)|(\s*)$/g, '')}
        </ModalFontPrimaryColorBlock>
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
  currentTab: PT.string,
  onClick: PT.func,
  style: PT.object,
};
