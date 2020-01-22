import React, { useState } from 'react';
import PT from 'prop-types';

import s from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfile/_components/UserProfileAvatar/style.module.sass';
import spinner from '@assets/user_profile/spinner-png.png';

export const AvatarContainer = ({ user: { name = 'User', avatar = {} }, style = {} }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  // TODO change default values
  return (
    <div
      className={`${s.wrapper} flex justify-content-center align-items-center relative`}
      style={style.wrapper}
    >
      <div className={`${s.avatar} flex justify-content-center align-items-center`} style={style.placeholder}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {avatar && avatar.formatUrls['360'] ? (
          <img
            className={s.image}
            src={!isImageLoaded ? spinner : avatar.formatUrls['360']}
            alt=""
            align="middle"
            style={style.image}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          (name !== null ? name : 'User')
            .replace(/ /g, '')
            .slice(0, 1)
            .toUpperCase()
        )}
      </div>
    </div>
  );
};

AvatarContainer.propTypes = {
  user: PT.object,
  style: PT.object,
};
