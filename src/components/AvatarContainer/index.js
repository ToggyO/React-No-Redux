import React, { useState } from 'react';
import PT from 'prop-types';

import s from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfile/_components/UserProfileAvatar/style.module.sass';
import spinner from '@assets/user_profile/spinner-png.png';

export const AvatarContainer = ({ user = {}, style = {} }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`${s.wrapper} flex justify-content-center align-items-center relative`}
      style={style.wrapper}
    >
      <div className={`${s.avatar} flex justify-content-center align-items-center`} style={style.placeholder}>
        {user.avatar && user.avatar.formatUrls['360'] ? (
          <img
            className={s.image}
            src={!isImageLoaded ? spinner : user.avatar.formatUrls['360']}
            alt=""
            align="middle"
            style={style.image}
            onLoad={() => setImageLoaded(true)}
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
};

AvatarContainer.propTypes = {
  user: PT.object,
  style: PT.object,
};
