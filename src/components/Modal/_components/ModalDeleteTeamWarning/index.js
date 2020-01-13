import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import {
  ModalBaseColorBlock,
  ModalFontPrimaryColorBlock,
  ModalFontSecondaryColorBlock,
} from '@components/StyledComponents/ColorBlocks';
import { ApplyButton, PrimaryColorOutlinedButton } from '@components/StyledComponents/Buttons';

export const ModalDeleteTeamWarning = ({ onClose, itemKey }) => (
  <ModalBaseColorBlock className={s.container}>
    <ModalFontPrimaryColorBlock className={`${s.primary_text} pb-6 text-align-center`}>
      Delete team?
    </ModalFontPrimaryColorBlock>
    <ModalFontSecondaryColorBlock className={s.secondary_text}>
      Deleting a team will also delete all the contents of the team, including projects, folders, boards and
      tasks. This action cannot be undone.
    </ModalFontSecondaryColorBlock>
    <div className={s.button_block}>
      <ApplyButton
        type="button"
        className={`${s.apply} btn rounded full_width pt-4 pb-4 mb-0`}
        onClick={() => {}}
      >
        Delete team
      </ApplyButton>
      <PrimaryColorOutlinedButton
        type="button"
        className={`${s.cancel} btn rounded full_width pt-4 pb-4 mb-0 ml-10`}
        onClick={() => onClose(itemKey)}
      >
        Close
      </PrimaryColorOutlinedButton>
    </div>
  </ModalBaseColorBlock>
);

ModalDeleteTeamWarning.propTypes = {
  onClose: PT.func,
  itemKey: PT.string,
};
