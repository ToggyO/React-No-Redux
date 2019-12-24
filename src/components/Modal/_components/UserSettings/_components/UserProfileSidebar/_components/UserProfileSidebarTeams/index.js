import React from 'react';
import PT from 'prop-types';

import styles from './style.module.sass';

import s from '@components/SidebarWrapper/_components/SidebarTeamsProject/_components/SidebarTeamsProjectsHeadline/style.module.sass';

export const UserProfileSidebarTeamsView = ({
  color = 'grey',
  teamName = 'Team Name',
  addClassContainer,
  addClassCircle,
  addClassHeadline,
  onClick,
  style = {},
}) => (
  <div className={`${styles.container} ${addClassContainer}`} style={style.container} onClick={onClick}>
    <div className={`${styles.square} ${addClassCircle}`} style={{ ...style.square, backgroundColor: color }}>
      <span className={`${styles.team_name}`} style={style.teamName}>
        {teamName
          .replace(/ /g, '')
          .slice(0, 1)
          .toUpperCase()}
      </span>
    </div>
    <div className={`${s.headline} ${addClassHeadline}`} style={style.headline}>
      <p className={styles.headline_text} style={style.headlineText}>
        {teamName.replace(/(^\s*)|(\s*)$/g, '')}
      </p>
    </div>
  </div>
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
