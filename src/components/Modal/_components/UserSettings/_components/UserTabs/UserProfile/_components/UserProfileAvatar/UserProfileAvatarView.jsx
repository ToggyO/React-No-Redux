import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

const UserProfileAvatarView = ({
  userData: {
    name = '',
    avatar: {
      formatUrls = {},
    },
  },
  modalOpen,
}) => {
  const [state, setState] = useState({
    isImageLoaded: false,
    image: null,
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      const fileToDataUrl = window.URL.createObjectURL(file);
      modalOpen('ModalCropperPreview', { loadedFile: fileToDataUrl });
      fileInputRef.current.value = null;
    }
  };

  const onLoadImage = () => {
    setState(true);
  };

  return (
    <div className={s.container}>
      <div className={s.avatar_container}>
        <div
          className={`${s.avatar} ${s.avatar_placeholder} flex justify-content-center align-items-center`}
        >
          {formatUrls['360']
            ? <img src={state.image} alt="ava-bomba" align="middle" onLoad={onLoadImage}/>
            : name
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
  )
};

UserProfileAvatarView.propTypes = {
  userData: PT.object,
  modalOpen: PT.func,
};

export default UserProfileAvatarView;
