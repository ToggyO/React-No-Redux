import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import spinner from '@assets/user_profile/spinner-png.png'

const UserProfileAvatarView = ({
  // userData: {
  //   name = '',
  //   avatar = {},
  // },
  userData,
  modalLoading,
  modalOpen,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      const fileToDataUrl = window.URL.createObjectURL(file);
      modalOpen('ModalCropperPreview', { loadedFile: fileToDataUrl, setImageLoaded });
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className={s.container}>
      <div className={`${s.avatar_container} flex justify-content-center align-items-center`}>
        <div
          className={`${s.avatar} ${s.avatar_placeholder} flex justify-content-center align-items-center`}
        >
          {userData.avatar && userData.avatar.formatUrls['360']
            ? <img
              src={(!isImageLoaded || modalLoading)
                ? spinner
                : userData.avatar.formatUrls['360']
              } alt="ava-bomba" align="middle" onLoad={() => setImageLoaded(true)}/>
            : userData.name
              .replace(/ /g, '')
              .slice(0, 1)
              .toUpperCase()
          }
        </div>
      </div>
      <div className={s.edit}>
        <label
          className={`${s.label} btn`}
          htmlFor="user-profile-avatar-edit">
          Edit avatar
          <input
            type="file"
            id="user-profile-avatar-edit"
            ref={fileInputRef}
            className={s.file_input}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

UserProfileAvatarView.propTypes = {
  userData: PT.object,
  modalLoading: PT.bool,
  modalOpen: PT.func,
};

export default UserProfileAvatarView;
