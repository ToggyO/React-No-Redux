import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { ModalBorderColorBlock, ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';

export const UserProfileSidebarHeadlinesWrapper = ({ children, title = '', addContainerClass = '' }) => (
  <div>
    <ModalBorderColorBlock className={`${s.headline} ${addContainerClass} pl-10 pb-4`}>
      <ModalFontColorBlock>{title}</ModalFontColorBlock>
    </ModalBorderColorBlock>
    <div className={s.children}>{children}</div>
  </div>
);

UserProfileSidebarHeadlinesWrapper.propTypes = {
  children: PT.oneOfType([PT.node, PT.element, PT.func]),
  title: PT.string,
  addContainerClass: PT.string,
};
