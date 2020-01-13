import React from 'react';

import s from '../UserTeamsLIstOfUsers/style.module.sass';

import { ModalBorderColorBlock, SecondaryColorBlock } from '@components/StyledComponents/ColorBlocks';

// eslint-disable-next-line react/prop-types
export const UserTeamsListOfUsersItemPlaceholder = () => (
  <div className={s.container}>
    <ModalBorderColorBlock className={`${s.headlines} pb-2 pt-2`}>
      <div className={`${s.name} full_width flex`}>
        <SecondaryColorBlock className={`${s.logo} mr-3`} />
        <SecondaryColorBlock className={s.text_user}>
          <div style={{ width: 100, height: 15 }} />
        </SecondaryColorBlock>
      </div>
      <div className={`${s.email} ${s.text_user} full_width`}>
        <SecondaryColorBlock style={{ width: 100, height: 15 }} />
      </div>
      <div className={`${s.last_active} ${s.text_user} full_width`}>
        <SecondaryColorBlock style={{ width: 100, height: 15 }} />
      </div>
      <div className={`${s.actions} btn full_width mt-0 mb-0`}>
        <SecondaryColorBlock style={{ width: 13, height: 12, justifyContent: 'center' }} />
      </div>
    </ModalBorderColorBlock>
  </div>
);
