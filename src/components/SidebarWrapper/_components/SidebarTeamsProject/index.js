import React, { useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const SidebarTeamsProject = ({ color = 'orange', teamName = '   Project' }) => {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <div className={s.wrapper}>
      <div className={`${s.container} relative`}>
        <div className={`${s.logo} flex align-items-center relative`}>
          <div
            className={`${s.circle} flex justify-content-center align-items-center`}
            style={{ backgroundColor: color }}
          >
            <span className={s.team_name}>
              {teamName
                .replace(/ /g, '')
                .slice(0, 1)
                .toUpperCase()}
            </span>
          </div>
          <p className={`${s.headline} ml-2`}>{teamName.replace(/ /g, '')}</p>
          <div className={s.switch_buttons}>
            <button
              type="button"
              className={`${s.button_create} btn`}
              // onClick={() => toggleOpen(!isOpen)}
            >
              <Icon iconName="add-plus" className={isOpen ? 'rotate-270' : 'rotate-270'} />
            </button>
            <button type="button" className={`${s.button_toggle} btn`} onClick={() => toggleOpen(!isOpen)}>
              <Icon iconName="arrow-right" className={isOpen ? 'rotate-180' : 'rotate-270'} />
            </button>
          </div>
        </div>
        <div className={`${s.info} ${isOpen ? s.shown : s.hidden}`}>
          <div className={s.test}>YEP!</div>
          <div className={s.test}>YEP!</div>
          <div className={s.test}>YEP!</div>
          <div className={s.test}>YEP!</div>
          <div className={s.test}>YEP!</div>
        </div>
      </div>
    </div>
  );
};

SidebarTeamsProject.propTypes = {
  color: PT.string,
  teamName: PT.string,
};
