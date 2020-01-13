import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { DeleteButton, PrimaryColorFilledButton } from '@components/StyledComponents/Buttons';
import { ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';
import { MODAL_KEYS, USER_COMMON } from '@config/common';

export const UserTeamsControlButton = ({ statusName, modalOpen }) => (
  <div className={s.container}>
    <div className={s.headline_container}>
      <ModalFontPrimaryColorBlock className={s.headline}>Manage team members</ModalFontPrimaryColorBlock>
    </div>
    <DeleteButton
      type="button"
      className={`${s.button} btn rounded`}
      style={{ visibility: statusName === USER_COMMON.USER_ROLES.SUPER_ADMIN ? 'visible' : 'hidden' }}
      onClick={() => modalOpen(MODAL_KEYS.MODAL_DELETE_TEAM_WARNING)}
    >
      Delete team
    </DeleteButton>
    <PrimaryColorFilledButton
      type="button"
      className={`${s.button} btn rounded ml-6 mr-3`}
      onClick={() => modalOpen(MODAL_KEYS.MODAL_DELETE_TEAM_CONFIRM)}
    >
      Add user to team
    </PrimaryColorFilledButton>
  </div>
);

UserTeamsControlButton.propTypes = {
  statusName: PT.string,
  modalOpen: PT.func,
};
