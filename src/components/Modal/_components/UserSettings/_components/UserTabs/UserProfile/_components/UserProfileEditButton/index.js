import React from 'react';

import s from './style.module.sass';

// eslint-disable-next-line react/prop-types
export const UserProfileEditButton = ({ onClick }) => (
  <div className={s.container}>
    <button type="button" className={`${s.button} btn primary-filled rounded`} onClick={onClick}>
      Edit
    </button>
  </div>
);
