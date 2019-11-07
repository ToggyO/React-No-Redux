import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const MessageSuccess = ({ message }) => (
  <div className={s.wrapper}>
    <div className={`${s.container} flex justify-content-center align-items-center`}>
      <div className={s.icon_container}>
        <Icon iconName="accept" className={s.icon} />
      </div>
      <div className={`${s.message} flex align-items-center`}>
        <p>{message}</p>
      </div>
    </div>
  </div>
);

MessageSuccess.propTypes = {
  message: PT.oneOfType([PT.string, PT.element, PT.node]),
};
