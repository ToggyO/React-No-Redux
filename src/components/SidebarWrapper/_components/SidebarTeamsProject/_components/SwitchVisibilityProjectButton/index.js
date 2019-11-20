import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';

export const SwitchVisibilityProjectButton = ({ isOpen, toggleOpen, setWidthProperty }) => (
  <button
    type="button"
    className={`${s.button_toggle} btn`}
    onClick={() => {
      toggleOpen(!isOpen);
      setWidthProperty();
    }}
  >
    <Icon iconName="arrow-right" className={isOpen ? 'rotate-270' : 'rotate-180'} />
  </button>
);

SwitchVisibilityProjectButton.propTypes = {
  setWidthProperty: PT.func,
  toggleOpen: PT.func,
  isOpen: PT.bool,
};
