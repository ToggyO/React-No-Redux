import React, { useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import {
  ModalBaseColorBlock,
  ModalFontPrimaryColorBlock,
  ModalFontSecondaryColorBlock,
} from '@components/StyledComponents/ColorBlocks';
import { DeleteTeamField } from '@components/Modal/_components/ModalDeleteTeamWarning/_components/DeleteTeamField';
import { USER_COMMON } from '@config/common';


const ModalDeleteTeamWarningView = ({ onClose, itemKey, deleteTeam, options = {} }) => {
  const [modalContent, toggleModalContent] = useState(false);

  const deleteTeamButton = () => {
    if (!modalContent) {
      return toggleModalContent(true);
    }
    deleteTeam(USER_COMMON.DATA_TYPES.TEAMS, options.currentTeamId);
    return onClose(itemKey);
  };

  return (
    <ModalBaseColorBlock className={`${s.container} ${modalContent ? s.containerHeight : ''}`}>
      <ModalFontPrimaryColorBlock className={`${s.primary_text} pb-6 text-align-center`}>
        {!modalContent ? 'Delete team?' : 'Are you sure?' }
      </ModalFontPrimaryColorBlock>
      <ModalFontSecondaryColorBlock className={s.secondary_text}>
        {!modalContent
          ? 'Deleting a team will also delete all the contents of the team, including projects, folders, boards and tasks. This action cannot be undone.'
          : 'Confirm the action by typing DELETE in the field below.' }
      </ModalFontSecondaryColorBlock>
      <DeleteTeamField
        modalContent={modalContent}
        deleteTeamButton={deleteTeamButton}
        onClose={onClose}
        itemKey={itemKey}
      />

    </ModalBaseColorBlock>
  );
};

ModalDeleteTeamWarningView.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
  deleteTeam: PT.func,
  options: PT.object,
};

export default ModalDeleteTeamWarningView;
