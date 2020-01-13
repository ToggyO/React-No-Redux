import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { DeleteButton, PrimaryColorFilledButton } from '@components/StyledComponents/Buttons';
import { ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';
import { USER_COMMON } from '@config/common';

export const UserTeamsControlButton = ({ statusName }) => (
  <div className={s.container}>
    <div className={s.headline_container}>
      <ModalFontColorBlock className={s.headline}>Manage team members</ModalFontColorBlock>
    </div>
    <DeleteButton
      type="button"
      className={`${s.button} btn rounded`}
      style={{ visibility: statusName === USER_COMMON.USER_ROLES.SUPER_ADMIN ? 'visible' : 'hidden' }}
    >
      Delete team
    </DeleteButton>
    <PrimaryColorFilledButton type="button" className={`${s.button} btn rounded ml-6 mr-3`}>
      Add user to team
    </PrimaryColorFilledButton>
  </div>
);

UserTeamsControlButton.propTypes = {
  statusName: PT.string,
};
