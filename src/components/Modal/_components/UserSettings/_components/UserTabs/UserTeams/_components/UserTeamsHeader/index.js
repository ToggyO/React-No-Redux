import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { ModalFontPrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';
import { MODAL_KEYS, USER_COMMON } from '@config/common';
import { Icon } from '@components/Icon';

export const UserTeamsHeader = ({ statusName, modalOpen, currentTeamId }) => (
  <div className={s.container}>
    <div className={s.headline_container}>
      <ModalFontPrimaryColorBlock className={s.headline}>Manage team</ModalFontPrimaryColorBlock>
    </div>
    <button
      type="button"
      className={`${s.button} btn`}
      style={{ visibility: statusName === USER_COMMON.USER_ROLES.SUPER_ADMIN ? 'visible' : 'hidden' }}
      onClick={() => modalOpen(MODAL_KEYS.MODAL_DELETE_TEAM_WARNING, { currentTeamId })}
    >
      <Icon iconName="trash_bin" className="mr-3" />
      Delete team
    </button>
  </div>
);

UserTeamsHeader.propTypes = {
  statusName: PT.string,
  modalOpen: PT.func,
  currentTeamId: PT.string,
};
