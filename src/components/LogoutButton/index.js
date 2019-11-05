import React from 'react';
import PT from 'prop-types';

import { userLogout } from '@services/auth';

export const LogoutButton = ({ addContainerClass, addButtonClass }) => (
  <div className={`${addContainerClass}`}>
    <button type="button" className={`${addButtonClass}`} onClick={userLogout}>
      Log Out
    </button>
  </div>
);

LogoutButton.propTypes = {
  addContainerClass: PT.string,
  addButtonClass: PT.string,
};
