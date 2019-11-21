import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { setHeightProperty } from '@utils/index';

export const SwitchVisibilityProjectButton = ({ isOpen, toggleOpen, containerRef, contentRef }) => (
  <button
    type="button"
    className={`${s.button_toggle} btn`}
    onClick={() => {
      toggleOpen(!isOpen);
      setHeightProperty(isOpen, containerRef, contentRef);
    }}
  >
    <Icon iconName="arrow-right" className={isOpen ? 'rotate-270' : 'rotate-180'} />
  </button>
);

SwitchVisibilityProjectButton.propTypes = {
  toggleOpen: PT.func,
  isOpen: PT.bool,
  containerRef: PT.node,
  contentRef: PT.node,
};
