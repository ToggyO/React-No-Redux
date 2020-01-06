import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { PrimaryColorBlock, SecondaryColorHeadlineFlagged } from '@components/StyledComponents/ColorBlocks';

export const LinkButton = ({ info = [], style = {}, flag }) => (
  <>
    <div key={info.title} className={`${s.link} relative pt-2 pb-2`} style={style.link}>
      <div
        className={`${s.icon_container} flex justify-content-center align-items-center`}
        style={style.iconContainer}
      >
        <Icon iconName={info.iconName} className={s.icon} />
        <PrimaryColorBlock className={s.notification} style={style.notification}>
          <div className={s.circle} style={style.circle}>
            9
          </div>
        </PrimaryColorBlock>
      </div>
      <SecondaryColorHeadlineFlagged className={`${s.title}`} flag={flag} style={style.title}>
        {info.title}
      </SecondaryColorHeadlineFlagged>
    </div>
  </>
);

LinkButton.propTypes = {
  info: PT.oneOfType([PT.array, PT.object]),
  style: PT.object,
  flag: PT.bool,
};
