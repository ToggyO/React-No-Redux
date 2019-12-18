import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { userLogout } from '@services/auth';

const ModalLogoutConfirmationView = ({ onClose, itemKey }) => (
  <div className={s.container}>
    <div className={`${s.headline} pb-6`}>
      <p>Are you sure you want to log out?</p>
    </div>
    <div className={s.button_block}>
      <button
        type="button"
        className={`${s.logout} btn green-filled rounded pt-4 pb-4 full_width`}
        onClick={userLogout}
      >
        Log Out
      </button>
      <button
        type="button"
        className={`${s.cancel} btn primary-outlined rounded pt-4 pb-4 full_width`}
        onClick={() => onClose(itemKey)}
      >
        Cancel
      </button>
    </div>
  </div>
);

ModalLogoutConfirmationView.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};

export default ModalLogoutConfirmationView;
