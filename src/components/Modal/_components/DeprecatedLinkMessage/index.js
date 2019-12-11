import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const DeprecatedLinkMessage = ({ onClose, itemKey }) => (
  <div className={s.wrapper}>
    <div className={`${s.message} pt-4 pb-4`}>
      <article className="pb-2 pt-2">Link is deprecated!</article>
      <p>Please, sign in with your new password.</p>
    </div>
    <div className={`${s.close} pt-4 pr-4`} onClick={() => onClose(itemKey)}>
      <button type="button" className="btn">
        <Icon iconName="close-modal" />
      </button>
    </div>
  </div>
);

DeprecatedLinkMessage.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};
