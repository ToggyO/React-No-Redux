import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { withMessageSuccess } from '@components/HOC/withSuccessMessage';
import { Icon } from '@components/Icon';

const MessageSuccess = ({ message, clearExtra, style = {} }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => setFlag(true), 0);
    return () => clearExtra();
  }, []);

  return (
    <div className={`${s.wrapper} ${flag ? s.shown : ''}`} style={style.wrapper}>
      <div
        className={`${s.container} flex justify-content-center align-items-center`}
        style={style.container}
      >
        <div className={s.icon_container} style={style.icon_container}>
          <Icon iconName="accept" className={s.icon} />
        </div>
        <div className={`${s.message} flex align-items-center`} style={style.message}>
          <p style={style.message_text}>{message}</p>
        </div>
      </div>
    </div>
  );
};

MessageSuccess.propTypes = {
  message: PT.oneOfType([PT.string, PT.element, PT.node]),
  clearExtra: PT.func,
  style: PT.object,
};

export default withMessageSuccess(MessageSuccess);
