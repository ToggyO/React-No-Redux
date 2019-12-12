import React, { useRef } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

const UserProfileAvatarView = ({ userName = '', modalOpen }) => {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      const fileToDataUrl = window.URL.createObjectURL(file);
      modalOpen('ModalCropperPreview', { loadedFile: fileToDataUrl });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.avatar_container}>
        <div
          className={`${s.avatar} ${s.avatar_placeholder} flex justify-content-center align-items-center`}
        >
          {userName
            .replace(/ /g, '')
            .slice(0, 1)
            .toUpperCase()}
        </div>
        {/* <img src="" alt="ava-bomba"/> */}
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
  )
};

UserProfileAvatarView.propTypes = {
  userName: PT.string,
  modalOpen: PT.func,
};

export default UserProfileAvatarView;
