import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const LinkButton = ({ info = [], style = {} }) => (
  <>
    <div key={info.title} className={`${s.link} relative pt-2 pb-2`} style={style.link}>
      <div
        className={`${s.iconContainer} flex justify-content-center align-items-center`}
        style={style.iconContainer}
      >
        <Icon iconName={info.iconName} className={s.icon} />
        <div className={s.notification} style={style.notification}>
          <div className={s.circle} style={style.circle}>
            9
          </div>
        </div>
      </div>
      <div className={s.title} style={style.title}>
        {info.title}
      </div>
    </div>
  </>
);

LinkButton.propTypes = {
  info: PT.oneOfType([PT.array, PT.object]),
  style: PT.object,
};
