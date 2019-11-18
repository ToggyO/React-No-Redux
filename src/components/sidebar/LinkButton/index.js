import React from 'react';
import PT from 'prop-types';
import { NavLink } from 'react-router-dom';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const LinkButton = ({ info = [], style = {} }) => (
  <>
    {info.map(item => (
      <NavLink key={item.title} to={item.link} className={s.link} style={style.link}>
        <div className={`${s.icon} flex justify-content-center align-items-center`} style={style.icon}>
          <Icon iconName={item.iconName} />
          <div className={s.notification} style={style.notification}>
            <div className={s.circle} style={style.circle} />
          </div>
        </div>
        <div className={s.title} style={style.title}>
          {item.title}
        </div>
      </NavLink>
    ))}
  </>
);

LinkButton.propTypes = {
  info: PT.array,
  style: PT.object,
};
