import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const UserProfileSidebarHeadlinesWrapper = ({ children, title = '' }) => (
  <div>
    <div className={`${s.headline} pl-10 pb-4 mb-2`}>
      <h2>{title}</h2>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

UserProfileSidebarHeadlinesWrapper.propTypes = {
  children: PT.oneOfType([PT.node, PT.element, PT.func]),
  title: PT.string,
};
