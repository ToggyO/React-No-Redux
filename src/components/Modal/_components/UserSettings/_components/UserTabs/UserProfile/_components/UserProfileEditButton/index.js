import React from 'react';

import s from './style.module.sass';

export const UserProfileEditButton = () => (
  <div className={s.container}>
    <button type="button" className={`${s.button} btn primary-filled rounded`}>
      Edit
    </button>
  </div>
);
