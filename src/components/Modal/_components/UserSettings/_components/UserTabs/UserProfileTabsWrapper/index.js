import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const UserProfileTabsWrapper = ({ children }) => (
  <div className={s.container}>
    <div className={`${s.tittle_container} pb-7`}>
      <h2>Title</h2>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

UserProfileTabsWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func, PT.array]),
};
