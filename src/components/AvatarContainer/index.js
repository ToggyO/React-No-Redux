import React from 'react';
import PT from 'prop-types';

import s from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfile/_components/UserProfileAvatar/style.module.sass';

export const AvatarContainer = ({ user = {}, style = {} }) => (
  <div
    className={`${s.wrapper} flex justify-content-center align-items-center relative`}
    style={style.wrapper}
  >
    <div className={`${s.avatar} flex justify-content-center align-items-center`} style={style.placeholder}>
      {user.avatar && user.avatar.formatUrls['360'] ? (
        <img
          className={s.image}
          src={user.avatar.formatUrls['360']}
          alt=""
          align="middle"
          style={style.image}
        />
      ) : (
        user.name
          .replace(/ /g, '')
          .slice(0, 1)
          .toUpperCase()
      )}
    </div>
  </div>
);

AvatarContainer.propTypes = {
  user: PT.object,
  style: PT.object,
};
