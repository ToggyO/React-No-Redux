import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import spinner from '@assets/user_profile/spinner-png.png'
import { OTHER } from '@config';
import { PrimaryColorLabel } from '@components/StyledComponents/ColorBlocks';


const UserProfileAvatarView = ({
  userData,
  avatarLoading,
  modalOpen,
  showGlobalError,
  userLoaderStart,
  userLoaderStop,
  deleteUserAvatar,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = fileInputRef.current.files[0];

    if (file) {
      const availableSize = file.size < OTHER.AVATAR_MAX_SIZE;
      const availableType = file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png';

      if (!availableSize) {
        showGlobalError('Profile picture should be max 10 Mb');
        fileInputRef.current.value = null;
        return;
      }
      if (!availableType) {
        showGlobalError('Profile picture should be jpeg, jpg or png');
        fileInputRef.current.value = null;
        return;
      }

      const img = document.createElement('img');
      img.onload = await function () {
        // eslint-disable-next-line react/no-this-in-sfc
        if (this.width < 100 || this.height < 100) {
          showGlobalError('Profile picture should be at least 100x100 pixels');
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
      };
      const _URL = window.URL || window.webkitURL;
      img.src = _URL.createObjectURL(file);
    } else {
      showGlobalError('Profile picture is more than 10 Mb');
    }
    fileInputRef.current.value = null;
  };

  return (
    <div className={s.container}>
      <div className={`${s.avatar_container} flex justify-content-center align-items-center relative`}>
        <div
          className={`${s.avatar} ${s.avatar_placeholder} flex justify-content-center align-items-center`}
        >
          {userData.avatar && userData.avatar.formatUrls['360']
            ? <img
              src={(!isImageLoaded || avatarLoading)
                ? spinner
                : userData.avatar.formatUrls['360']
              } alt="" align="middle" onLoad={() => setImageLoaded(true)}/>
            : userData.name
              .replace(/ /g, '')
              .slice(0, 1)
              .toUpperCase()
          }
        </div>
      </div>
      <div className={`${s.edit} flex flex-column`}>
        <PrimaryColorLabel
          className={`${s.label} btn mb-2`}
          htmlFor="user-profile-avatar-edit">
          Edit avatar
          <input
            type="file"
            id="user-profile-avatar-edit"
            ref={fileInputRef}
            className={s.file_input}
            onChange={handleChange}
          />
        </PrimaryColorLabel>
        <button
          type="button"
          className={`${s.avatar_delete} btn mt-1`}
          onClick={() => deleteUserAvatar()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

UserProfileAvatarView.propTypes = {
  userData: PT.object,
  avatarLoading: PT.bool,
  modalOpen: PT.func,
  showGlobalError: PT.func,
  userLoaderStart: PT.func,
  userLoaderStop: PT.func,
  deleteUserAvatar: PT.func,
};

export default UserProfileAvatarView;
