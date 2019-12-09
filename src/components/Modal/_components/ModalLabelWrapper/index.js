import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import style from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfileTabsWrapper/style.module.sass';
import { Icon } from '@components/Icon';

export const ModalLabelWrapper = ({ children, label, onClose }) => (
  <div className={s.wrapper}>
    <div className={s.container}>
      <h3 className={s.label}>{label}</h3>
      <div className={`${style.close}`} onClick={onClose}>
        <button type="button" className="btn">
          <Icon iconName="close-modal" />
        </button>
      </div>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

ModalLabelWrapper.propTypes = {
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node), PT.element]),
  label: PT.string,
  onClose: PT.func,
};
