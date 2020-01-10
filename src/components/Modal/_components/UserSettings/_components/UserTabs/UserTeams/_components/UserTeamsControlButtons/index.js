import React from 'react';

import s from './style.module.sass';

import { DeleteButton, PrimaryColorFilledButton } from '@components/StyledComponents/Buttons';
import { ModalFontColorBlock } from '@components/StyledComponents/ColorBlocks';

export const UserTeamsControlButton = () => (
  <div className={s.container}>
    <div className={s.headline_container}>
      <ModalFontColorBlock className={s.headline}>Manage team members</ModalFontColorBlock>
    </div>
    <DeleteButton type="button" className={`${s.button} btn rounded`}>
      Delete team
    </DeleteButton>
    <PrimaryColorFilledButton type="button" className={`${s.button} btn rounded ml-6 mr-3`}>
      Add user to team
    </PrimaryColorFilledButton>
  </div>
);
