import React, { useState, useRef } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const SidebarTeamsProject = ({ color = 'orange', teamName = '   Project' }) => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const setWidthProperty = () => {
    const contentStyle = window.getComputedStyle(contentRef.current);
    if (!isOpen) {
      // debugger;
      containerRef.current.style.height = contentStyle.height;
    } else {
      // debugger;
      containerRef.current.style.height = 0;
    }
  };

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
          <p className={`${s.headline} ml-2`}>{teamName.replace(/(^\s*)|(\s*)$/g, '')}</p>
          <div className={s.switch_buttons}>
            <button type="button" className={`${s.button_create} btn`} onClick={() => setWidthProperty()}>
              <Icon iconName="add-plus" className={isOpen ? 'rotate-270' : 'rotate-270'} />
            </button>
            <button
              type="button"
              className={`${s.button_toggle} btn`}
              onClick={() => {
                toggleOpen(!isOpen);
                setWidthProperty();
              }}
            >
              <Icon iconName="arrow-right" className={isOpen ? 'rotate-270' : 'rotate-180'} />
            </button>
          </div>
        </div>
        <div ref={containerRef} className={`${s.info} ${isOpen ? s.shown : s.hidden}`}>
          <div ref={contentRef}>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
            <div className={s.test}>YEP!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarTeamsProject.propTypes = {
  color: PT.string,
  teamName: PT.string,
};
