import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import spinner from '@assets/user_profile/spinner-png.png'
import { OTHER } from '@config';

const UserProfileAvatarView = ({
  // userData: {
  //   name = '',
  //   avatar = {},
  // },
  userData,
  modalLoading,
  modalOpen,
  showGlobalError,
  userLoaderStart,
  userLoaderStop,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = fileInputRef.current.files[0];

    if (file) {
      const availableSize = file.size < OTHER.AVATAR_MAX_SIZE;
      const availableType = file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png';

      if (!availableSize) {
        showGlobalError('Profile picture is more than 10 Mb');
        fileInputRef.current.value = null;
        return;
      }
      if (!availableType) {
        showGlobalError('Invalid profile picture format');
        fileInputRef.current.value = null;
        return;
      }
      reader.readAsDataURL(file);
      reader.onloadstart = () => {
        userLoaderStart();
      };
      reader.onloadend = () => {
        modalOpen('ModalCropperPreview', { loadedFile: reader.result });
        userLoaderStop();
      };
    } else {
      showGlobalError('Profile picture is more than 10 Mb');
    }
    fileInputRef.current.value = null;
    // if (file && file.size < OTHER.AVATAR_MAX_SIZE) {
    //   const fileToDataUrl = window.URL.createObjectURL(file);
    //   modalOpen('ModalCropperPreview', { loadedFile: fileToDataUrl, setImageLoaded });
    //   fileInputRef.current.value = null;
    // } else {
    //   showGlobalError('Profile picture is more than 10 Mb')
    // }
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
  showGlobalError: PT.func,
  userLoaderStart: PT.func,
  userLoaderStop: PT.func,
};

export default UserProfileAvatarView;
